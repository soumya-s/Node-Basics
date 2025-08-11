function add(num1,num2){
    return num1+num2;
}
function subtract(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){    
    if(num2 === 0){
        throw new Error("Division by zero is not allowed.");
    }   
    return num1/num2;
}
module.exports = {
    add,
    subtract,
     multiply,
     divide
     

}   