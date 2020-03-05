function outer() {
    let value = 0;
    return function(){
        value ++;
       return value;
    }
}

const value1 = outer();
console.log(value1())
console.log(value1())
console.log(value1())
console.log(value1())
console.log(value1())

const value2 = outer();
console.log(value2())
console.log(value2())
console.log(value2())
console.log(value2())
console.log(value2())
console.log(value2())
console.log(value2())
console.log(value2())
console.log(value2())
console.log(value2())