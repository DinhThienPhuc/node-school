const http = require('http');
const url = require('url');

const formatTime = (pathname, time) => {
    if ('/api/parsetime' === pathname) {
        return {
            "hour": time.getHours(),
            "minute": time.getMinutes(),
            "second": time.getSeconds()
        };
    }

    return { "unixtime": time.getTime() };
}

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const time = new Date(parsedUrl.query.iso);

    const content = formatTime(parsedUrl.pathname, time);

    if (content) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(content));
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(process.argv[2]);