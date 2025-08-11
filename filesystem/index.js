const fs = require('fs');
const path = require('path');
const dataFolder = path.join(__dirname, 'data');
console.log(dataFolder)
if(!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder);
    console.log('Data folder created:', dataFolder);
}
const dataFile = path.join(dataFolder, 'data.txt');
if(!fs.existsSync(dataFile))    {
    fs.writeFileSync(dataFile, 'Hello, World!', 'utf8');
    console.log('Data file created:', dataFile);
}   else {
    fs.appendFileSync(dataFile, '\nAppended data.', 'utf8');
    console.log('Data file already exists:', dataFile);
}

const data = fs.readFileSync(dataFile, 'utf8');
console.log('Data from file:', data); // Outputs: Data from file: Hello, World!\nAppended data.

const asyncFilePath = path.join(dataFolder, 'asyncData.txt');
fs.writeFile(asyncFilePath, 'This is async data.', 'utf8', (err) => {
    if (err) {
        throw err
        console.error('Error writing async file:', err);
    } else {
        console.log('Async data file created:', asyncFilePath);
    }


});

fs.readFile(asyncFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading async file:', err);
    } else {
        console.log('Data from async file:', data); // Outputs: Data from async file: This is async data.
    }
}); 