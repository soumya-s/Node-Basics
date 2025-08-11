const lodash = require('lodash');

const names = ['alice', 'Bob', 'Charlie', 'david'];
const shuffledNames = lodash.shuffle(names);
console.log('Shuffled Names:', shuffledNames); // Outputs: Shuffled Names: [ '  

const captilazedNames =lodash.map(names,lodash.capitalize);
console.log('Capitalized Names:', captilazedNames); // Outputs: Capitalized Names: [ 'Alice', 'Bob', 'Charlie', 'David' ]
