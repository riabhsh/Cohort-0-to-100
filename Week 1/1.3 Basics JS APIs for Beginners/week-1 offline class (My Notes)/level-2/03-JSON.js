// What is JSON?
// JSON stands for JavaScript Object Notation
// JSON is a lightweight data interchange format
// JSON is language independent *
// JSON is "self-describing" and easy to understand
// * The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only. Code for reading and generating JSON data can be written in any programming language.

// JSON is a format for storing and transporting data.
// JSON is often used when data is sent from a server to a web page.

function jsonMethods(jsonstring){
    console.log("\nOriginal JSON String:\n", jsonstring);

    let parsedObject = JSON.parse(sampleJSONString);
    console.log("\nAfter JSON.parse():\n",parsedObject);

    let jsonStringified = JSON.stringify(parsedObject);
    console.log("\nAfter JSON.stringified():\n",jsonStringified,"\n");
}

const sampleJSONString = '{"key": "value", "name": "Rishabh maurya", "age": "24","nested": {"nestedkey": "nesteedValue"}}';

jsonMethods(sampleJSONString);
