//1. write a function to find a sum of two numbers

function sum(a, b){
    const sum = a + b;
    return sum
}

const value = sum(24, 55);
console.log(value);

//2. write a Function that displays this(above) result in pretty format

function pretty(num1, num2, sum){
    let sumValue = sum(num1, num2);
    console.log(`${num1} + ${num2} = ${sumValue}`);
}

pretty(24,55,sum);

//3. Write another function that takes this(above) sum and prints it passive tense

function passiveTense(a, b, sum){
    let sumValue = sum(a, b);
    console.log(`${sumValue} is the sum of ${a} and ${b}`);
}

passiveTense(24, 55, sum);