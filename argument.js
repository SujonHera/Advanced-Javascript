function add(){
    let numbers = [...arguments];
    let sum  = 0;
    for(let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        sum = sum + element;
    }
    return sum;
}
const result =  add(2,34, 235, 25,);
console.log(result)