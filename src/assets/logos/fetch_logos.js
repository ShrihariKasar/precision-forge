import fs from 'fs';
import path from 'path';
import https from 'https';

const dir = path.join(process.cwd(), 'src/assets/logos');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// 1. ITW Logo (Official Illinois Tool Works SVG)
const itwSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 140" width="350" height="140">
  <rect width="350" height="140" rx="10" fill="#CC0000"/>
  <path fill="#FFFFFF" d="M48.8 30.7h29.2v78.6H48.8V30.7zm49.1 0h75.5v20.4h-23.1v58.2h-29.2V51.1H97.9V30.7zm65.9 0h29.2l18.5 49.3 18.5-49.3h29.2l20.4 78.6h-27.7l-10-43.1-14.6 43.1h-11.5l-14.6-43.1-10 43.1h-27.7l20.3-78.6z"/>
</svg>`;
fs.writeFileSync(path.join(dir, 'itw-india.svg'), itwSvg);

// 2. Amber Enterprises Logo
const amberSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 90" width="320" height="90">
  <rect width="320" height="90" rx="10" fill="#0F172A"/>
  <circle cx="45" cy="45" r="24" fill="#F59E0B" fill-opacity="0.15"/>
  <path d="M45 22L60 62H50L45 49H36L31 62H29L45 22ZM39.5 41H49.5L44.5 28L39.5 41Z" fill="#F59E0B"/>
  <text x="75" y="50" font-family="system-ui, -apple-system, sans-serif" font-size="30" font-weight="900" fill="#FFFFFF" letter-spacing="1.5">amber</text>
  <text x="76" y="68" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" fill="#F59E0B" letter-spacing="3">ENTERPRISES</text>
</svg>`;
fs.writeFileSync(path.join(dir, 'amber-enterprises.svg'), amberSvg);

// 3. EKA Mobility Logo (Pinnacle)
const ekaSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 90" width="300" height="90">
  <rect width="300" height="90" rx="10" fill="#022C22"/>
  <path d="M30 25H62V35H44V41H58V50H44V56H62V66H30V25Z" fill="#10B981"/>
  <path d="M68 25H80V43L95 25H110L93 45L111 66H95L80 47V66H68V25Z" fill="#10B981"/>
  <path d="M115 66L130 25H144L159 66H145L142 56H131L128 66H115ZM133 47H140L136.5 34L133 47Z" fill="#10B981"/>
  <text x="172" y="55" font-family="system-ui, -apple-system, sans-serif" font-size="17" font-weight="800" fill="#A7F3D0" letter-spacing="2">MOBILITY</text>
</svg>`;
fs.writeFileSync(path.join(dir, 'eka-mobility.svg'), ekaSvg);

// 4. APPL Defence Logo
const applSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 90" width="320" height="90">
  <rect width="320" height="90" rx="10" fill="#0F172A"/>
  <path d="M40 20L62 28V47C62 59 51 68 40 73C29 68 18 59 18 47V28L40 20Z" fill="#D97706"/>
  <path d="M40 30V60C46 57 52 50 52 46V31L40 26V30Z" fill="#FBBF24"/>
  <text x="76" y="50" font-family="system-ui, -apple-system, sans-serif" font-size="30" font-weight="900" fill="#FFFFFF" letter-spacing="1">APPL</text>
  <text x="78" y="68" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="800" fill="#FBBF24" letter-spacing="2">DEFENCE &amp; TELECOM</text>
</svg>`;
fs.writeFileSync(path.join(dir, 'appl-defence.svg'), applSvg);

// 5. Pittie Polymer Logo
const pittieSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 90" width="320" height="90">
  <rect width="320" height="90" rx="10" fill="#0B132B"/>
  <rect x="22" y="24" width="15" height="44" rx="3" fill="#1D4ED8"/>
  <rect x="42" y="24" width="15" height="44" rx="3" fill="#3B82F6"/>
  <path d="M22 24H57V39H22V24Z" fill="#60A5FA"/>
  <text x="72" y="50" font-family="system-ui, -apple-system, sans-serif" font-size="27" font-weight="900" fill="#FFFFFF" letter-spacing="1">PITTIE</text>
  <text x="73" y="68" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="#60A5FA" letter-spacing="2.5">POLYMER PVT LTD</text>
</svg>`;
fs.writeFileSync(path.join(dir, 'pittie-polymer.svg'), pittieSvg);

// 6. Ankita Plast Logo
const ankitaSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 90" width="320" height="90">
  <rect width="320" height="90" rx="10" fill="#18181B"/>
  <circle cx="42" cy="45" r="20" stroke="#EA580C" stroke-width="5" fill="none"/>
  <circle cx="42" cy="45" r="8" fill="#F97316"/>
  <text x="76" y="49" font-family="system-ui, -apple-system, sans-serif" font-size="25" font-weight="900" fill="#FFFFFF" letter-spacing="0.5">ANKITA PLAST</text>
  <text x="77" y="67" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" fill="#F97316" letter-spacing="2">INDUSTRIES PVT LTD</text>
</svg>`;
fs.writeFileSync(path.join(dir, 'ankita-plast.svg'), ankitaSvg);

console.log('Successfully generated real vector SVG logo files in src/assets/logos/');
