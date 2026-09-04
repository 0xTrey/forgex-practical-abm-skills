import fs from 'node:fs';
import path from 'node:path';

const out = path.dirname(new URL(import.meta.url).pathname);
const logoSource = fs.readFileSync(path.join(out, 'assets', 'forgex-logo-pink.svg'), 'utf8');
const logoBody = logoSource.match(/<svg[^>]*>([\s\S]*)<\/svg>/)?.[1];

if (!logoBody) {
  throw new Error('Unable to read the approved ForgeX logo asset.');
}

const slides = [
  { n: 1, title: 'Build the right\naccount list.', nodes: ['ICP +\nEXCLUSIONS', 'EVIDENCE +\nSCORING', 'REVIEWABLE\nACCOUNT LIST'], slug: 'account-list-builder' },
  { n: 2, title: 'Spot the\n“why now.”', nodes: ['PUBLIC\nSIGNAL', 'RELEVANCE +\nCONFIDENCE', 'WHY-NOW\nBRIEF'], slug: 'why-now-signal-scanner' },
  { n: 3, title: 'Plan the account\ncampaign.', nodes: ['ACCOUNT\nEVIDENCE', 'CAMPAIGN\nPREMISE', 'APPROVAL-READY\nBRIEF'], slug: 'abm-strategist' },
  { n: 4, title: 'Map the buying\ncommittee.', nodes: ['BUYING\nDECISION', 'ROLES +\nQUESTIONS', 'CONTENT\nCOVERAGE MAP'], slug: 'buying-committee-mapper' },
  { n: 5, title: 'Ground the work\nin brand.', nodes: ['PUBLIC BRAND\nSOURCE', 'TOKENS +\nASSETS', 'CREATIVE\nBRIEF'], slug: 'brand-harvester' },
  { n: 6, title: 'Build the campaign\nlanding page.', nodes: ['APPROVED\nBRIEF', 'MESSAGE +\nPAGE FLOW', 'REVIEWABLE\nDRAFT'], slug: 'campaign-landing-page' },
  { n: 7, title: 'Build an industry\ncampaign page.', nodes: ['BASE\nCAMPAIGN', 'COHORT\nEVIDENCE', 'INDUSTRY\nEXPERIENCE'], slug: 'industry-campaign-page' },
  { n: 8, title: 'Build the one-to-one\nmicrosite.', nodes: ['VERIFIED ACCOUNT\nCONTEXT', 'BUYER\nSTORY', 'PRIVATE\nPREVIEW'], slug: 'one-to-one-microsite' },
  { n: 9, title: 'Turn one asset\ninto an experience.', nodes: ['APPROVED\nSOURCE', 'TRUTH SHEET +\nJOURNEY', 'CAMPAIGN\nEXPERIENCE'], slug: 'content-magic' },
  { n: 10, title: 'Write the\nfirst touch.', nodes: ['RELATIONSHIP +\nSIGNAL', 'RELEVANT\nMESSAGE', 'UNSENT\nDRAFT'], slug: 'first-touch-builder' },
];

const esc = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

function multiline(value, x, startY, lineHeight, attrs) {
  return value.split('\n').map((line, index) => `<text x="${x}" y="${startY + index * lineHeight}" ${attrs}>${esc(line)}</text>`).join('');
}

for (const slide of slides) {
  const fileNumber = String(slide.n).padStart(2, '0');
  const boxWidth = 408;
  const startX = 140;
  const gap = 48;
  const boxes = slide.nodes.map((label, index) => {
    const x = startX + index * (boxWidth + gap);
    const isLast = index === slide.nodes.length - 1;
    const fill = isLast ? '#E63888' : index === 1 ? '#3D1F5C' : '#FBF8F4';
    const textFill = isLast || index === 1 ? '#FAF7F2' : '#0B0B0F';
    const arrow = isLast ? '' : `<path d="M ${x + boxWidth + 8} 621 L ${x + boxWidth + gap - 10} 621" stroke="#E63888" stroke-width="7"/><path d="M ${x + boxWidth + gap - 25} 606 L ${x + boxWidth + gap - 10} 621 L ${x + boxWidth + gap - 25} 636" fill="none" stroke="#E63888" stroke-width="7"/>`;
    const text = multiline(label, x + boxWidth / 2, 603, 34, `text-anchor="middle" fill="${textFill}" font-family="Arial, Helvetica, sans-serif" font-size="25" font-weight="800" letter-spacing="1"`);
    return `<rect x="${x}" y="545" width="${boxWidth}" height="152" rx="22" fill="${fill}" stroke="#0B0B0F" stroke-width="4"/>${arrow}${text}`;
  }).join('');

  const title = multiline(slide.title, 140, 250, 82, 'fill="#0B0B0F" font-family="Arial, Helvetica, sans-serif" font-size="70" font-weight="900"');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900">
  <rect width="1600" height="900" fill="#FAF7F2"/>
  <rect x="0" y="0" width="26" height="900" fill="#E63888"/>
  <circle cx="1450" cy="115" r="76" fill="#C7F25C"/>
  <circle cx="1494" cy="151" r="37" fill="#3D1F5C"/>
  <svg x="108" y="44" width="270" height="77" viewBox="0 0 1080 307.2">${logoBody}</svg>
  <text x="1440" y="265" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="110" font-weight="900" fill="#3D1F5C">${slide.n}</text>
  ${title}
  ${boxes}
  <text x="140" y="831" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700" fill="#0B0B0F">ONE JOB. ONE SKILL. ONE USEFUL OUTPUT.</text>
  <text x="1460" y="831" text-anchor="end" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="700" fill="#E63888">FORGEX PRACTICAL ABM SKILLS · ${slide.slug}</text>
  </svg>`;
  fs.writeFileSync(path.join(out, `skill-${fileNumber}.svg`), svg);
}
