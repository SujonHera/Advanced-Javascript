let str = "Hi,I am Sujon Hossain, I am a New Front-End Web Developer, I want to learn HTML5, CSS3, Bootstrap 4, JavaScript, React, Meterial Ui, Node, Express, Mongodb";

let wordCount = (str) => {

    let count = 0;
    for (let i = 0; i < str.trim().length; i++) {
        if (str[i] === " ") {
            count++;
        }
    }
    count++;
    return count;
}
console.log(wordCount(str));


// function WordCount(str) {
//     return str.trim().split(" ").length;
// }

// console.log(WordCount("hello world amr seonr bnagla "));


// function countWords(str) {
//     
//     return matches ? matches.length : 0;
// }

// console.log(countWords("Cat's meow"));


function wordCounted(str) {
    var stringArray = str.split(' ');
    var count = 0;
    for (var i = 0; i < stringArray.length; i++) {
        var word = stringArray[i];
        if (/[A-Za-z]/.test(word)) {
            count++
        }
    }
    return count
}
var stred = "testing strings here's a string --..  ? // ... random characters ,,, end of string? ";
console.log(wordCounted(stred));

function wordCountFunc(str){
    let strArray = str.split(' ');
    let count = 0;
    for(let i = 0; i < strArray.length; i++) {
        let word = strArray[i];
        if(/[A-Zz-z]/.test(word)){
            count++;
        }
    }
    return count;
}

var matche = str.match(/[\w\d\’\'-]+/gi);

console.log(matches);
