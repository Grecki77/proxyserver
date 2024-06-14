const http = require('http');
const { exec } = require('child_process');
const url = require('url');

const server = http.createServer((req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method === 'GET') {

    const parsedUrl = url.parse(req.url, true);
    const targetUrl = parsedUrl.query.url;
    if (!targetUrl) {
      res.writeHead(400, {'Content-Type': 'application/json'});
      res.end(JSON.stringify({ error: 'No "RRL" in the request'  }));
      return;
    }

    exec(`curl ${targetUrl}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        res.writeHead(500, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({ error: 'CURL Error' }));
        return;
      }

      const responseData = stdout;

      res.writeHead(200, {
        'Content-Type': 'application/json',
      });
      res.end(responseData);
    });
  } else {
    res.writeHead(405, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({ error: 'HTTP Method not allowed' }));
  }
});

const PORT = 7100;
server.listen(PORT, () => {
  console.log(`Server listing on port ${PORT} - PROXY.NUMERNABIS`);
});
