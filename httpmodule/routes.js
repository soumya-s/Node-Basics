const http = require('http');
const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        console.log("Request received for:", req.url);
        res.end('Home Page\n');
    }
    else if(url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        console.log("Request received for:", req.url);
        res.end('About Page\n');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        console.log("Request received for:", req.url);
        res.end('404 Not Found\n');
    }
}  );
const port = 3000;  
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});