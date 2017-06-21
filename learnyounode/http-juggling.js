const http = require('http');
var results = [];
var count = 0;

const getData = (idx) => {
    http.get(process.argv[2 + idx], res => {
        let content = '';
        res.on('error', err => console.error(err));
        res.on('data', chunk => {
            content = content.concat(chunk);
        });
        res.on('end', () => {
            results[idx] = content;
            count++;
            if (3 === count) {
                printAll();
            }
        });
    });
}

const printAll = () => {
    for (let i = 0; i < 3; i++) {
        console.log(results[i]);
    }
}

for (let i = 0; i < 3; i++) {
    getData(i);
}