fs = require('fs');

function person(name,callbackfn){
    console.log(`Hello,${name}`);
    callbackfn();
}

function address(){
    console.log("India");
}
person("Soumya",address); // Outputs: Hello, Soumya
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return
    } else {
        console.log('File content:', data); // Outputs: File content: Call back logic
    }
});
