#!/usr/bin/env python3

from pathlib import Path
from tempfile import NamedTemporaryFile
from urllib.request import Request, urlopen

from reportlab.graphics import renderPDF
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import landscape, letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph
from svglib.svglib import svg2rlg


REPO_ROOT = Path(__file__).resolve().parent.parent
OUTPUT = REPO_ROOT / "output/pdf/folloze-practical-abm-skills-one-pager.pdf"
LOGO_URL = "https://cdn.prod.website-files.com/6464087fdf877a12a8bd4cd6/6464087fdf877a12a8bd4d26_folloze-logo.svg"
REPO_URL = "https://github.com/0xTrey/forgex-practical-abm-skills"

SKILLS = [
    ("1", "Context Corpus Builder", "GROUND", "Turn approved materials into a portable company context corpus.", "context-corpus-builder"),
    ("2", "Account List Builder", "TARGET", "Turn an ICP into a ranked, evidence-backed account list.", "account-list-builder"),
    ("3", "Why-Now Signal Scanner", "SIGNAL", "Find current account-level timing signals and evidence gaps.", "why-now-signal-scanner"),
    ("4", "ABM Strategist", "PLAN", "Turn one account and offer into an approval-ready campaign brief.", "abm-strategist"),
    ("5", "Buying Committee Mapper", "MAP", "Map buying roles, questions, evidence needs, and coverage gaps.", "buying-committee-mapper"),
    ("6", "Brand Harvester", "BRAND", "Turn a public website into a source-backed creative brief.", "brand-harvester"),
    ("7", "Campaign Landing Page", "BUILD", "Turn an approved brief into a focused campaign-page draft.", "campaign-landing-page"),
    ("8", "Industry Campaign Page", "SCALE", "Adapt a campaign for a vertical, persona, or account cohort.", "industry-campaign-page"),
    ("9", "One-to-One Microsite", "PERSONALIZE", "Create a named-account experience from approved research.", "one-to-one-microsite"),
    ("10", "Content Magic", "TRANSFORM", "Turn one approved asset into an interactive campaign experience.", "content-magic"),
    ("11", "First-Touch Builder", "CONNECT", "Turn a real relationship, signal, and offer into a concise opening-message draft.", "first-touch-builder"),
]

DEEP_NAVY = HexColor("#071428")
NAVY = HexColor("#1C293F")
SLATE = HexColor("#2C3D59")
MUTED = HexColor("#637087")
BLUE = HexColor("#0077FF")
DEEP_BLUE = HexColor("#0048DE")
CYAN = HexColor("#00CCFF")
PALE_BLUE = HexColor("#F3F9FD")
LIGHT_BLUE = HexColor("#D8ECFA")
WHITE = HexColor("#FFFFFF")
W, H = landscape(letter)
PAGE_MARGIN = 40


def paragraph(c, text, x, y_top, width, size, color, bold=False, leading=None):
    style = ParagraphStyle(
        name="copy",
        fontName="Helvetica-Bold" if bold else "Helvetica",
        fontSize=size,
        leading=leading or size * 1.22,
        textColor=color,
        alignment=TA_LEFT,
        spaceBefore=0,
        spaceAfter=0,
    )
    item = Paragraph(text, style)
    _, height = item.wrap(width, H)
    item.drawOn(c, x, y_top - height)
    return height


def download_logo():
    request = Request(LOGO_URL, headers={"User-Agent": "Folloze-one-pager-builder/1.0"})
    with urlopen(request, timeout=20) as response:
        data = response.read()
    temp = NamedTemporaryFile(suffix=".svg", delete=False)
    temp.write(data)
    temp.close()
    return Path(temp.name)


def draw_logo(c, x, y, target_width):
    logo_path = download_logo()
    try:
        drawing = svg2rlg(str(logo_path))
        scale = target_width / drawing.width
        drawing.scale(scale, scale)
        renderPDF.draw(drawing, c, x, y)
    finally:
        logo_path.unlink(missing_ok=True)


def rounded(c, x, y, width, height, fill, stroke=None, radius=7, line_width=0.8):
    c.setFillColor(fill)
    c.setStrokeColor(stroke or fill)
    c.setLineWidth(line_width)
    c.roundRect(x, y, width, height, radius, fill=1, stroke=1 if stroke else 0)


def skill_card(c, skill, x, y, width, height):
    number, title, label, description, slug = skill
    url = f"{REPO_URL}/blob/main/skills/{slug}/SKILL.md"
    fill = PALE_BLUE if int(number) % 4 in (1, 0) else WHITE
    rounded(c, x, y, width, height, fill, LIGHT_BLUE, radius=5)

    circle_x = x + 18
    circle_y = y + height / 2
    c.setFillColor(BLUE)
    c.circle(circle_x, circle_y, 10, fill=1, stroke=0)
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 7.2)
    c.drawCentredString(circle_x, circle_y - 2.5, number)

    text_x = x + 35
    title_width = max(105, c.stringWidth(title, "Helvetica-Bold", 9.4))
    c.setFillColor(DEEP_NAVY)
    c.setFont("Helvetica-Bold", 9.4)
    c.drawString(text_x, y + height - 17, title)

    badge_x = min(x + width - 71, text_x + title_width + 7)
    badge_width = max(33, c.stringWidth(label, "Helvetica-Bold", 5.2) + 10)
    c.setFillColor(WHITE)
    c.setStrokeColor(HexColor("#9ED5FF"))
    c.setLineWidth(0.6)
    c.roundRect(badge_x, y + height - 21.5, badge_width, 11, 5.5, fill=1, stroke=1)
    c.setFillColor(DEEP_BLUE)
    c.setFont("Helvetica-Bold", 5.2)
    c.drawCentredString(badge_x + badge_width / 2, y + height - 18, label)

    paragraph(c, description, text_x, y + height - 24, width - 62, 6.7, MUTED, leading=8)

    arrow_x = x + width - 17
    c.setFillColor(HexColor("#D7F5FF"))
    c.circle(arrow_x, circle_y, 8, fill=1, stroke=0)
    c.setFillColor(DEEP_BLUE)
    c.setFont("Helvetica-Bold", 8)
    c.drawCentredString(arrow_x, circle_y - 2.5, ">")
    c.linkURL(url, (x, y, x + width, y + height), relative=0, thickness=0)


def footer_link(c, label, url, right, y):
    width = c.stringWidth(label, "Helvetica-Bold", 6.5) + 16
    x = right - width
    rounded(c, x, y, width, 17, WHITE, LIGHT_BLUE, radius=8.5)
    c.setFillColor(DEEP_NAVY)
    c.setFont("Helvetica-Bold", 6.5)
    c.drawCentredString(x + width / 2, y + 5.7, label)
    c.linkURL(url, (x, y, x + width, y + 17), relative=0, thickness=0)
    return x - 5


def build():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(OUTPUT), pagesize=(W, H), pageCompression=1)
    c.setTitle("Folloze | Practical AI Skills for ABM")
    c.setAuthor("Folloze")
    c.setSubject("Eleven vendor-neutral, draft-first AI workflows for account-based marketing")

    c.setFillColor(WHITE)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    c.setFillColor(HexColor("#F2FBFF"))
    c.wedge(-65, H - 93, 170, H + 87, 0, 360, fill=1, stroke=0)

    draw_logo(c, PAGE_MARGIN, H - 45, 86)
    c.setStrokeColor(LIGHT_BLUE)
    c.setLineWidth(0.8)
    c.line(PAGE_MARGIN, H - 54, W - PAGE_MARGIN, H - 54)
    c.setFillColor(BLUE)
    c.rect(W - 252, H - 36, 22, 2, fill=1, stroke=0)
    c.setFillColor(SLATE)
    c.setFont("Courier-Bold", 6.7)
    c.drawRightString(W - PAGE_MARGIN, H - 38, "PRACTICAL AI WORKFLOWS FOR B2B MARKETING")

    c.setFillColor(DEEP_NAVY)
    c.setFont("Helvetica-Bold", 23.2)
    c.drawString(PAGE_MARGIN, H - 94, "11 practical AI workflows")
    c.setFillColor(BLUE)
    c.drawString(PAGE_MARGIN, H - 119, "for ABM.")
    paragraph(c, '<b>Pick one job. Open the skill. Give it to the AI agent you already use.</b> Each workflow defines the inputs, process, output, quality checks, and stop conditions for reviewable B2B marketing work.', PAGE_MARGIN, H - 132, 376, 8, MUTED, leading=9.8)

    panel_x, panel_y, panel_w, panel_h = 434, H - 166, 318, 96
    rounded(c, panel_x + 3, panel_y - 3, panel_w, panel_h, CYAN, radius=7)
    rounded(c, panel_x, panel_y, panel_w, panel_h, DEEP_NAVY, radius=7)
    paragraph(c, "Your AI creates. Folloze puts approved work in market.", panel_x + 14, panel_y + panel_h - 13, panel_w - 28, 11.8, WHITE, bold=True, leading=12.8)
    paragraph(c, "Folloze helps teams build and launch governed campaign destinations, personalize content paths, and capture first-party engagement signals that guide the next move.", panel_x + 14, panel_y + 50, panel_w - 28, 6.8, HexColor("#DCE8F5"), leading=8.2)
    chip_y = panel_y + 8
    for index, word in enumerate(("Build", "Activate", "Signal")):
        chip_x = panel_x + 14 + index * 99
        rounded(c, chip_x, chip_y, 91, 16, NAVY, HexColor("#52617A"), radius=8, line_width=0.6)
        c.setFillColor(WHITE)
        c.setFont("Helvetica-Bold", 6.6)
        c.drawCentredString(chip_x + 45.5, chip_y + 5.6, word)

    c.setStrokeColor(LIGHT_BLUE)
    c.line(PAGE_MARGIN, H - 177, W - PAGE_MARGIN, H - 177)
    c.setFillColor(DEEP_NAVY)
    c.setFont("Helvetica-Bold", 15.2)
    c.drawString(PAGE_MARGIN, H - 199, "Choose the job. Open the skill.")
    c.setFillColor(MUTED)
    c.setFont("Courier-Bold", 6.1)
    c.drawString(270, H - 197, "11 LINKED WORKFLOWS")
    c.drawRightString(W - PAGE_MARGIN, H - 197, "VENDOR-NEUTRAL  |  DRAFT-FIRST  |  HUMAN-REVIEWED")

    grid_top = H - 211
    gap_x, gap_y = 7, 5
    content_width = W - (2 * PAGE_MARGIN)
    card_w = (content_width - gap_x) / 2
    card_h = 44
    for index, skill in enumerate(SKILLS):
        if index == 10:
            x = PAGE_MARGIN
            y = grid_top - 5 * (card_h + gap_y) - card_h
            skill_card(c, skill, x, y, content_width, card_h)
            continue
        row = index // 2
        col = index % 2
        x = PAGE_MARGIN + col * (card_w + gap_x)
        y = grid_top - row * (card_h + gap_y) - card_h
        skill_card(c, skill, x, y, card_w, card_h)

    footer_y = 23
    c.setStrokeColor(LIGHT_BLUE)
    c.line(PAGE_MARGIN, footer_y + 27, W - PAGE_MARGIN, footer_y + 27)
    paragraph(c, "Every skill is source-available, vendor-neutral, and designed for human review before publishing, sending, paid enrichment, or system-of-record changes.", PAGE_MARGIN, footer_y + 20, 490, 5.8, MUTED, leading=7)
    right = W - PAGE_MARGIN
    right = footer_link(c, "Why MCP", "https://www.folloze.com/blog/article/bring-your-own-ai-mcp", right, footer_y)
    right = footer_link(c, "Folloze", "https://www.folloze.com/", right, footer_y)
    footer_link(c, "All skills", REPO_URL, right, footer_y)

    c.showPage()
    c.save()
    print(f"Wrote {OUTPUT}")


if __name__ == "__main__":
    build()
