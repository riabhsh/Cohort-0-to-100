// =ARRAY=
//1. WAP to print all Even Numbers in Array

let numbers = [1,2,3,4,500,6,70,8,9,10];
let lengthOfArray = numbers.length;
console.log(`\nAll Even Numbers in Array:`);
for(let i = 0; i < lengthOfArray; i++){
    if(numbers[i] % 2 == 0){
        console.log(numbers[i]);
    }
}

//2. WAP to print Biggest Number in Array
let biggestNum = 0;
let biggestNumIndex = 0;
console.log(`\nBiggest Number in Array:`);
for(let i = 0; i < lengthOfArray; i++){
    if(numbers[i] > biggestNum){
        biggestNum = numbers[i];
        biggestNumIndex = i;
    }
}
console.log(`${biggestNum} is the biggest number in array in index ${biggestNumIndex}. \n`);

// =Objects=
//3. WAP to prints all the male peoples firstname given in the complex array

const persons = [{firstname: "rishabh", gender: "male"}, {
                    firstname: "ram", gender: "male"}, {
                    firstname: "shyam", gender: "male"}, {
                    firstname: "neha", gender: "female"}
];

let numberOfPersons = persons.length;

for(let i = 0; i < numberOfPersons; i++){
    if(persons[i]["gender"] == "male"){
        console.log(persons[i]["firstname"]);
    }
}

//4. WAP to reverse all the elements of an array
let number = [1, 2, null, 4, undefined, "rishabh", 7];
let revnumber = [];
let j = 0

let totalNumbers = number.length;
console.log(`\n\nreverse all the elements of an array\nNo of Elements: ${totalNumbers}`);

for(i = totalNumbers-1; i >= 0; i--){
    revnumber[j] = number[i];
    j++;
}

console.log(number);
console.log(revnumber);