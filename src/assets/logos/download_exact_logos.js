import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

const dir = path.join(process.cwd(), 'src/assets/logos');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

function download(url, filename) {
  return new Promise((resolve, reject) => {
    try {
      const dest = path.join(dir, filename);
      const file = fs.createWriteStream(dest);

      const parsedUrl = new URL(url);
      const client = parsedUrl.protocol === 'https:' ? https : http;

      const req = client.get(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        }
      }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          let redirectUrl = res.headers.location;
          if (!redirectUrl.startsWith('http')) {
            redirectUrl = new URL(redirectUrl, parsedUrl.origin).href;
          }
          return download(redirectUrl, filename).then(resolve).catch(reject);
        }
        if (res.statusCode !== 200) {
          console.error(`Failed ${url}: ${res.statusCode}`);
          return resolve(false);
        }
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded ${filename} (${fs.statSync(dest).size} bytes)`);
          resolve(true);
        });
      });

      req.on('error', (err) => {
        fs.unlink(dest, () => {});
        console.error(`Error downloading ${url}:`, err.message);
        resolve(false);
      });
    } catch (e) {
      console.error(`URL Exception ${url}:`, e.message);
      resolve(false);
    }
  });
}

async function main() {
  console.log('Downloading actual logo images...');

  // 1. APPL Defence (Wix static logo)
  await download(
    'https://static.wixstatic.com/media/032a98_e1bc6c8ba84f4f019df4d73ff8b7c29f~mv2.png/v1/fill/w_788,h_84,al_c,lg_1,q_85,enc_avif,quality_auto/APPL%20Defence%20%26%20Telecommunications%20Pvt_%20L.png',
    'appl-defence-real.png'
  );

  // 2. Pittie Polymer (LinkedIn Logo)
  await download(
    'https://media.licdn.com/dms/image/v2/C560BAQFAx8oVaKlm4g/company-logo_200_200/company-logo_200_200/0/1630577173770?e=2147483647&v=beta&t=1JkIsEV_MbVOrHDGkpRyBN4QR0fqSzM44WAFjDGtKRs',
    'pittie-polymer-real.png'
  );

  // 3. Amber Enterprises (CompaniesLogo PNG)
  await download(
    'https://companieslogo.com/img/orig/AMBER.NS-0254efb5.png',
    'amber-enterprises-real.png'
  );

  // 4. Ankita Plast (Facebook Logo / Direct Image)
  await download(
    'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=100076162595618',
    'ankita-plast-real.jpg'
  );
}

main();
