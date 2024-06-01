// parseInt() global function converts Strings into Integers
function explainParseInt(value){
    console.log("\nOrginal value:",value);
    let result = parseInt(value);
    console.log("parseInt Value:",result);
}
console.log("\nparseInt() global function converts Strings into Integers\n");
// Example Usage for parseInt
explainParseInt("24");
explainParseInt("24TextHere")
explainParseInt("24.20210");



// parseFloat() global function converts Strings into Float
function explainParseFloat(value){
    console.log("\nOrginal value:",value);
    let result = parseFloat(value);
    console.log("parseFloat Value:",result);
}
console.log("\nparseFloat() global function converts Strings into Floats\n");
// Example Usage for parseFloat
explainParseFloat("24");
explainParseFloat("24TextHere")
explainParseFloat("24.20210");