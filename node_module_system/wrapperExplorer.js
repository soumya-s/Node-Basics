console.log("Wrapper Explorer is running...");  
console.log("__filname",__filename);
console.log("__dirname",__dirname);
module.exports.greet = function(name){
    console.log(`Hello, ${name}! Welcome to the Wrapper Explorer.`);
}