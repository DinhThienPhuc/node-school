const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (err, data) => {
    if (err) throw new Error('There is an error occurs in process. Please check input...');
    const numOfEnter = data.split('\n').length - 1;
    console.log(numOfEnter);
});