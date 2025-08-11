function fetchData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Data fetched successfully!");
            }, 1000); // Simulate a delay of 1 second
        });

        
}
async function processData() {
  console.log("Starting data processing...");
  const data = await fetchData(); // Pause execution until fetchData() resolves
  console.log(data); // "Data fetched successfully!"
  console.log("Data processing complete.");
}
processData();


function  delayFn(time){
    return new Promise((resolve) => setTimeout(resolve,time));
    }
async function greetFunction(name){
    await delayFn(2000); // Wait for 2 seconds
    console.log(`Hello, ${name}!`);

}

greetFunction("Soumya"); // Outputs
async function division(num1,num2){
    try{
        if(num2 === 0){
            throw new Error("Division by zero is not allowed.");
        }
        return num1 / num2;
    }catch(error){

        console.log("Error:", error.message);
    }

}
async function executeDivision() {
    console.log(await division(10, 2)) // Outputs: 5
    console.log(await division(10, 0) );
}
executeDivision(); // Outputs: 5
// Outputs: Error: Division by zero is not allowed.