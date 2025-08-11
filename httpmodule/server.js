const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    console.log("Request received for:", req);
    res.end('Hello, World!\n');
});
const port = 3000;
server.listen(port, () => {
    console.log(`server is running on port ${port}`)
});
