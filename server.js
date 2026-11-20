const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 5000;
const ROOT_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  let cleanUrl = req.url.split('?')[0];

  // Default redirect root to landing page
  if (cleanUrl === '/' || cleanUrl === '') {
    cleanUrl = '/ats-website/index.html';
  } else if (cleanUrl === '/app' || cleanUrl === '/app/') {
    cleanUrl = '/ats-app/index.html';
  } else if (cleanUrl === '/website' || cleanUrl === '/website/') {
    cleanUrl = '/ats-website/index.html';
  }

  // Sanitize path to prevent directory traversal
  const safePath = path.normalize(cleanUrl).replace(/^(\.\.[\/\\])+/, '');
  const filePath = path.join(ROOT_DIR, safePath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(`
        <body style="font-family:sans-serif;background:#0b1523;color:#fff;padding:40px;text-align:center">
          <h2>404 - Page Not Found</h2>
          <p><a href="/ats-website/index.html" style="color:#f59e0b">Go to ATS Website</a> | <a href="/ats-app/index.html" style="color:#10b981">Go to ATS Application</a></p>
        </body>
      `);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*'
    });
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`ATS Operations Server listening on http://localhost:${PORT}`);
  console.log(`Landing Page: http://localhost:${PORT}/ats-website/index.html`);
  console.log(`Full ATS App: http://localhost:${PORT}/ats-app/index.html`);
});

