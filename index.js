const http = require('http');
const fs = require('fs');
const path = require('path');

const myserver = http.createServer((req, res) => {

  if (req.url === '/') {
    res.end('Home Page');
  }


  else if (req.url === '/aboutus') {
    res.end('batman image');
    const imagePath = path.join(__dirname, 'Batman.jpg');

    res.writeHead(200, { 'Content-Type': 'image/jpg' });
    fs.createReadStream(imagePath).pipe(res);
  }

  else {
    res.writeHead(404);
    res.end('404 not found');
  }
});

myserver.listen(8000, () => console.log('server is run'));