const numbers = [3, 4, 5, 6, 7, 8];
const outputs = [];

for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    outputs.push(result);
}
console.log(outputs);


const result = numbers.map((element) =>  element * element)
console.log(result)

const bigger = numbers.filter(x =>  x > 5)

console.log(bigger);

const students = [
    {name: "Shibbir", phone : 123456},
    {name: "Niloy", phone : 123465},
    {name: "Rakib", phone: 1321456},
    {name: "Anyone", phone: 231456}
]

const name = students.map(name => name.name);
console.log(name);
