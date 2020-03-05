// let and const is a block scope variable
// var is hosting or global variable 

function sum (first, second){
    let result = first + second;
    if(result> 9){
        let mood = "happy";
        console.log(mood);
    }
    return result
}

const result = sum (23, 23);
console.log(result);