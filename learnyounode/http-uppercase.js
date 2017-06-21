const http = require('http');
const map = require('through2-map');

const server = http.createServer((req, res) => {
    if ('POST' !== req.method) {
        return res.end('Send me a POST request!\n');
    }
    req.pipe(map(chunk => chunk.toString().toUpperCase()))
        .pipe(res);
});

server.listen(process.argv[2]);
