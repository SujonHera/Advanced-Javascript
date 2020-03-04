/**
 * Falsy Value: 0, undefined, NaN, null, false, "", 
 * Truthy Value: " ", "0" , [], {}
 */
let name = {};

if(name){
    console.log("Condition is true");
}else{
    console.log("Condition is false");
}
