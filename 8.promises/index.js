

function delayfn(time){
    return new Promise((resolve)=>{
        setTimeout(resolve,time)

    })
}
console.log("Promise Starts...");
delayfn(2000).then(()=>{
    console.log("This is a delayed message.");
    console.log("Promise Ends...");
  

})
  console.log("This is the end of the script.");
function divideFn(num1,num2){
    return new Promise((resolve,reject)=>{
            if(num2 === 0){
            reject(new Error("Division by zero is not allowed."));
         } else {
            resolve(num1 / num2);
        }
    });
}
divideFn(10, 0)
 .then((result)=> console.log("Result:", result)) // Outputs: Result: 5
 .catch((error)=> console.error(error.message)); // Outputs: Division by zero is not allowed.


 function addFn(num1, num2) {
    return new Promise((resolve) => {
        resolve(num1 + num2);
    });
 }
 addFn(2^6, 2)
 .then((result)=> console.log("Sum:", result)) // Outputs: Sum: 15  
 .catch((error)=> console.error(error.message)); // Outputs: Division by zero is not allowed.