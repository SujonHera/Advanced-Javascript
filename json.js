// const friends = [
//     {name: "Shibbir", phone : 123456},
//     {name: "Niloy", phone : 123465},
//     {name: "Rakib", phone: 1321456},
//     {name: "Anyone", phone: 231456}
// ]

// const userJSON = JSON.stringify(students);
// console.log(userJSON);

// const userFromJSON = JSON.parse(userJSON);

// console.log(userFromJSON)

// const userData = userFromJSON.map(name => name.name);
// console.log(userData)

// const friends = [
//     {name: "Shibbir", phone : 123456},
//     {name: "Niloy", phone : 123465},
//     {name: "Rakib", phone: 1321456},
//     {name: "Anyone", phone: 231456}
// ]

// const userJSON = JSON.stringify(friends);
// console.log(userJSON);

// const userFromJSON = JSON.parse(userJSON);

// const userNameFromJSON =  userFromJSON.map(name => name.name)
// console.log(userNameFromJSON)



const friends = [
    {name: "Olil", phone: 1234123},
    {name: "Jolil", phone: 3523523},
    {name: "Kholil", phone: 3532123},
    {name: "Molil", phone: 2353252}
]

const friendsJSON = JSON.stringify(friends);
const friendsDataFromJSON = JSON.parse(friendsJSON);

console.log(friendsDataFromJSON);

const friendsName = friendsDataFromJSON.map(name => name.name);
console.log(friendsName)
