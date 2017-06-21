const fs = require('fs');
const path = require('path');
const directoryPath = process.argv[2];
const extension = '.' + process.argv[3];

fs.readdir(directoryPath, (err, files) => {
    if (err) throw new Error('Error...');
    const filteredFiles = files.filter(filePath => extension === path.extname(filePath));
    printFile(filteredFiles);
});

const printFile = filteredFiles => {
    filteredFiles.map(file => {
        console.log(file);
    });
}