const firstModule= require('./first_module'); 
console.log(firstModule.add(5, 10)); // Outputs: 15
console.log(firstModule.subtract(10, 5)); // Outputs: 5             
console.log(firstModule.multiply(5, 10)); // Outputs: 50
try
{
   let result = firstModule.divide(10, 0); // This will throw an error
    console.log(result); // Outputs: 5
}
catch (error) {
    console.error(error.message); // Outputs: Division by zero is not allowed.
}