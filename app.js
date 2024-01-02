//create a server listen on port no 9000
const http = require('http')

const PORT = 9000
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!',
  }));
})

server.listen(PORT, () => console.log(`Server is running on  http://localhost:${PORT}`))