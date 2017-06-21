const http = require('http');

http.get(process.argv[2], response => {
    let content = '';
    response.on('error', err => console.error(err));
    response.on('data', chunk => {
        content = content.concat(chunk);
    });

    response.on('end', () => {
        console.log(content.length);
        console.log(content);
    });
});