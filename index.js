const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200);

  res.write('ма шаа Аллох1, мял дик г1улкх хили')

  res.end();
})

server.listen(3000);