const fs = require('fs');
const path = require('path');

module.exports = (directory, extension, callback) => {
    fs.readdir(directory, (err, files) => {
        if (err)
            return callback(err, null);
        
        let exten = '.' + extension;
        const filteredFiles = files.filter(file => exten === path.extname(file));
        callback(null, filteredFiles);
    });
}