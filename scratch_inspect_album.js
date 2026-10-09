const https = require('https');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function main() {
  const css = await fetchUrl('https://traothiep.vn/assets/InvitationCardView-C1qRTDNe.css');
  const pos = css.indexOf('.wedding-album');
  console.log('Pos of .wedding-album:', pos);
  if (pos !== -1) {
    console.log(css.substring(pos, pos + 2500));
  }
}

main().catch(console.error);
