const http = require('http');

http.get(process.argv[2], response => {
    response.setEncoding('utf8');
    response.on('error', err => console.log(err));
    response.on('data', chunk => {
        console.log(chunk);
    });
});