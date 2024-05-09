// Object Methods Explanation

function objectMethods(myObject){

    console.log("\n+++ Object Methods Explanation +++\n")
    console.log("Original Object:", myObject);

    let keys = Object.keys(myObject);
    console.log("After Object.keys():", keys);
    
    let values = Object.values(myObject);
    console.log("After Object.values():", values);
    
    let entries = Object.entries(myObject);
    console.log("After Object.entries():", entries);
    
    let hasProp = myObject.hasOwnProperty("property");
    console.log("After hasOwnProperty(): ", hasProp);
    
    let newObj = Object.assign({}, myObject, {newProperty: "new Value"});
    console.log("After Object.assign():", newObj);
    // for assigning key: value to sub objects
    // let newObj = Object.assign({}, myObject.subKey, {newProperty: "new Value"});
    
}

const testObject = {
    key1: "value 1",
    key2: "value 2",
    Key3: "value 3",
    subKey: {
        subkey1: "value 1"
    }
}

objectMethods(testObject);