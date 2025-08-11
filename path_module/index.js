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