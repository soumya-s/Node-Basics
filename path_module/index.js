const express = require('express');
const app = express();

const path = require("path");

 console.log(path.dirname(__filename));    // Outputs: Current directory path
console.log(path.basename(__filename));   

console.log("file extnesion",path.extname(__filename))// Outputs: Name of the current file

const joinedPath = path.join(__dirname, 'subdir', 'file.txt');
console.log("joined path", joinedPath); // Outputs: Path to the file in subdir

const resolvedPath = path.resolve('subdir1', 'file.txt');
console.log("resolved path", resolvedPath); // Outputs: Absolute path to the file in subdir

const normalizedPath = path.normalize('/foo/bar//baz/asdf/quux/..');
console.log("normalized path", normalizedPath); // Outputs: Normalized path without redundant segments

app.get('/get-ip',(req,res)=>{
    // Get ip address
    console.log("ip addres",req.socket.remoteAddress);
    console.log("i is",req.ip); 
})
app.listen(3000,()=>{
    console.log("server started on port 3000");
});
console.log(0.1+0.2 === 0.3); // Outputs: false due to floating-point precision issues
console.log(Number.EPSILON); // Outputs: The smallest difference between two representable numberscom

console.log(    Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON); // Outputs: true, confirming the numbers are effectively equal

console.log( (0.1 + 0.2).toFixed(1) === (0.3)); // Outputs: false, reaffirming floating-point precision issue
console.log((0.1+0.2).toFixed(2) === (0.3).toFixed(2)); // Outputs: true, comparing fixed-point representations