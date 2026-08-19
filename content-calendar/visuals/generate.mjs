import fs from 'node:fs';
import path from 'node:path';

const out = path.dirname(new URL(import.meta.url).pathname);
const slides = [
  { n: '01', phase: 'DISCOVER', title: 'Build the right\naccount list.', subtitle: 'A score is useful only when a marketer can explain it.', nodes: ['ICP +\nEXCLUSIONS', 'EVIDENCE +\nSCORING', 'REVIEWABLE\nACCOUNT LIST'], slug: 'account-list-builder' },
  { n: '02', phase: 'DISCOVER', title: 'Spot the\n“why now.”', subtitle: 'Timing evidence is a hypothesis, not proof of intent.', nodes: ['PUBLIC\nSIGNAL', 'RELEVANCE +\nCONFIDENCE', 'WHY-NOW\nBRIEF'], slug: 'why-now-signal-scanner' },
  { n: '03', phase: 'PLAN', title: 'Plan the account\ncampaign.', subtitle: 'Personalization starts with a defensible account hypothesis.', nodes: ['ACCOUNT\nEVIDENCE', 'CAMPAIGN\nPREMISE', 'APPROVAL-READY\nBRIEF'], slug: 'abm-strategist' },
  { n: '04', phase: 'PLAN', title: 'Map the buying\ncommittee.', subtitle: 'A title is not a complete buying journey.', nodes: ['BUYING\nDECISION', 'ROLES +\nQUESTIONS', 'CONTENT\nCOVERAGE MAP'], slug: 'buying-committee-mapper' },
  { n: '05', phase: 'GROUND', title: 'Ground the work\nin brand.', subtitle: 'Evidence before design. Translation before decoration.', nodes: ['PUBLIC BRAND\nSOURCE', 'TOKENS +\nASSETS', 'CREATIVE\nBRIEF'], slug: 'brand-harvester' },
  { n: '06', phase: 'BUILD', title: 'Build the campaign\nlanding page.', subtitle: 'One audience. One job. One primary next step.', nodes: ['APPROVED\nBRIEF', 'MESSAGE +\nPAGE FLOW', 'REVIEWABLE\nDRAFT'], slug: 'campaign-landing-page' },
  { n: '07', phase: 'SCALE', title: 'Build an industry\ncampaign page.', subtitle: 'Real adaptation is more than changing the industry name.', nodes: ['BASE\nCAMPAIGN', 'COHORT\nEVIDENCE', 'INDUSTRY\nEXPERIENCE'], slug: 'industry-campaign-page' },
  { n: '08', phase: 'PERSONALIZE', title: 'Build the one-to-one\nmicrosite.', subtitle: 'Relevant to the account. Clearly from the seller.', nodes: ['VERIFIED ACCOUNT\nCONTEXT', 'BUYER\nSTORY', 'PRIVATE\nPREVIEW'], slug: 'one-to-one-microsite' },
  { n: '09', phase: 'TRANSFORM', title: 'Turn one asset\ninto an experience.', subtitle: 'Reorganize the source around the buyer’s job.', nodes: ['APPROVED\nSOURCE', 'TRUTH SHEET +\nJOURNEY', 'CAMPAIGN\nEXPERIENCE'], slug: 'content-magic' },
  { n: '10', phase: 'ACTIVATE', title: 'Write the\nfirst touch.', subtitle: 'One true observation. One relevant offer. One easy ask.', nodes: ['RELATIONSHIP +\nSIGNAL', 'RELEVANT\nMESSAGE', 'UNSENT\nDRAFT'], slug: 'first-touch-builder' },
];

const esc = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

function multiline(value, x, startY, lineHeight, attrs) {
  return value.split('\n').map((line, index) => `<text x="${x}" y="${startY + index * lineHeight}" ${attrs}>${esc(line)}</text>`).join('');
}

for (const slide of slides) {
  const boxWidth = 408;
  const startX = 140;
  const gap = 48;
  const boxes = slide.nodes.map((label, index) => {
    const x = startX + index * (boxWidth + gap);
    const isLast = index === slide.nodes.length - 1;
    const fill = isLast ? '#E63888' : index === 1 ? '#3D1F5C' : '#FBF8F4';
    const textFill = isLast || index === 1 ? '#FAF7F2' : '#0B0B0F';
    const arrow = isLast ? '' : `<path d="M ${x + boxWidth + 8} 686 L ${x + boxWidth + gap - 10} 686" stroke="#E63888" stroke-width="7"/><path d="M ${x + boxWidth + gap - 25} 671 L ${x + boxWidth + gap - 10} 686 L ${x + boxWidth + gap - 25} 701" fill="none" stroke="#E63888" stroke-width="7"/>`;
    const text = multiline(label, x + boxWidth / 2, 668, 34, `text-anchor="middle" fill="${textFill}" font-family="Arial, Helvetica, sans-serif" font-size="25" font-weight="800" letter-spacing="1"`);
    return `<rect x="${x}" y="610" width="${boxWidth}" height="152" rx="22" fill="${fill}" stroke="#0B0B0F" stroke-width="4"/>${arrow}${text}`;
  }).join('');

  const title = multiline(slide.title, 140, 250, 82, 'fill="#0B0B0F" font-family="Arial, Helvetica, sans-serif" font-size="70" font-weight="900"');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900">
  <rect width="1600" height="900" fill="#FAF7F2"/>
  <rect x="0" y="0" width="26" height="900" fill="#E63888"/>
  <circle cx="1450" cy="115" r="76" fill="#C7F25C"/>
  <circle cx="1494" cy="151" r="37" fill="#3D1F5C"/>
  <text x="140" y="102" font-family="Arial, Helvetica, sans-serif" font-size="31" font-weight="900" fill="#E63888" letter-spacing="4">FORGEX</text>
  <text x="140" y="155" font-family="Arial, Helvetica, sans-serif" font-size="23" font-weight="800" fill="#3D1F5C" letter-spacing="3">PRACTICAL ABM SKILL ${slide.n} · ${slide.phase}</text>
  ${title}
  <text x="140" y="453" font-family="Arial, Helvetica, sans-serif" font-size="30" fill="#3D1F5C">${esc(slide.subtitle)}</text>
  ${boxes}
  <text x="140" y="831" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700" fill="#0B0B0F">ONE JOB. ONE SKILL. ONE USEFUL OUTPUT.</text>
  <text x="1460" y="831" text-anchor="end" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="700" fill="#E63888">github.com/0xTrey/forgex-practical-abm-skills · ${slide.slug}</text>
  </svg>`;
  fs.writeFileSync(path.join(out, `skill-${slide.n}.svg`), svg);
}
