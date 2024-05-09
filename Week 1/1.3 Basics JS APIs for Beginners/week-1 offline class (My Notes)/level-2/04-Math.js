// Math Methods Explanation

function mathMethods(value){
    console.log("\n+++ Math Methods +++\n");
    console.log("Original Value:", value);

    let rounded = Math.round(value);
    console.log("After round():", rounded);

    let ceiling = Math.ceil(value);
    console.log("After ceil():", ceiling);

    let flooring = Math.floor(value);
    console.log("After floor():", flooring);

    let randomValue = Math.random();
    console.log("After random()", randomValue);

    let maxValue = Math.max(value, 100, 500, 4);
    console.log("After max("+value+", 100, 500, 4):", maxValue);

    let minValue = Math.min(value, 100, 500, 4);
    console.log("After min("+value+", 100, 500, 4):", minValue);

    let powerOf = Math.pow(value, 3);
    console.log("After pow("+value+", 3):", powerOf.toFixed(2));

    let squareRoot = Math.sqrt(value);
    console.log("After sqrt():", squareRoot.toFixed(2));
}

// .toFixed(2) for showing only 2 decimal places

mathMethods(2);
mathMethods(2.256);