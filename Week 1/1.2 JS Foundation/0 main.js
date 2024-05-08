// ---- let, var, const ----
// const a = 1;
// a = 5
// console.log(a);

// ---- Simple Primitives(number, strings , boolean) ----

// let fname = "rishabh";
// let age = 24;
// let programmer = true;

// console.log("my name is" ,fname, "\nmy age is", age);
// console.log(`my name is ${fname}`);

// if(programmer == true){
//     console.log(`${fname} is a programmer`);
// }
// else{
//     console.log(`${fname} is a not programmer`);
// }

// ---- for loop ----

// let answer = 1;
// for(answer; answer <= 10; answer++){
//     console.log(`number: ${answer}`);
// }

// ---- Complex Simple Primitives(array and objects) ----

// Array
// const peoplesArray = ["ram", "shyam", "shiva", "neha"];
// console.log(peoplesArray);

// const peoplesGender = ["male", "male", "male", "female"];
// const numberOfUsers = peoplesArray.length;

// print name of males only
// for(let i = 0; i <= numberOfUsers; i++){
//     if(peoplesGender[i] == "male"){
//         console.log(peoplesArray[i]);
//     }
// }

// or better way with objects
// const peoples = [{
//     firstname: "ram",
//     gender: "male"
// }, {
//     firstname: "shyam",
//     gender: "male"
// }, {
//     firstname: "shiva",
//     gender: "male"
// }, {
//     firstname: "neha",
//     gender: "female"
// }]
// console.log(peoples);
// console.log(peoples[2]["firstname"]);


// example of nested object inside array
// const persons = [{firstname: "rishabh", job: {role: "ceo", money: "1 billion"}, gender: "male"}, {
//     firstname: "ram", gender: "male"}, {
//     firstname: "shyam", gender: "male"}, {
//     firstname: "neha", gender: "female"}
// ];


// console.log(persons[0]["job"]["money"]);
// //or you can write that
// console.log(persons[0].job.money);

// ---- Functions ----
// -- Callback Function(when functions takes a function as an argument... simple)--
// function sum(num1, num2, fntocall) {
//     let result = num1 + num2;
//     fntocall(result);
// }

// function displayResult(data) {
//     console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//     console.log("Sum's result is : " + data);
// }

// // You are only allowed to call one function after this
// // How will you displayResult of a sum

// const ans = sum(2, 4, displayResultPassive);

// Example 2
// function arithmatic(num1, num2, type){
//     if(type == add){
//         const sum = add(num1, num2);
//         return sum;
//     }

//     if(type == sub){
//         const subtract = sub(num1, num2);
//         return subtract;
//     }

//     if(type == mul){
//         const multiply = mul(num1, num2);
//         return multiply;
//     }

//     if(type == div){
//         const division = div(num1, num2);
//         return division;
//     }

//     if(type == mod){
//         const modulous = mod(num1, num2);
//         return modulous;
//     }
// }

// function add(n1, n2){
//     return(n1 + n2);
// }

// function sub(n1, n2){
//     return(n1 - n2);
// }

// function mul(n1, n2){
//     return(n1 * n2);
// }

// function div(n1, n2){
//     return(n1 / n2);
// }

// function mod(n1, n2){
//     return(n1 % n2);
// }

// const calc = arithmatic(100, 20, div);
// console.log(calc);

// const calc2 = arithmatic(100, 20, mod);
// console.log(calc2);

// Example 3
// function hello(){
//     console.log("ram ram bhai!");
// }

// // 1000ms = 1 second 
// setTimeout(hello, 3 * 1000);

// setInterval(hello, 1*1000);