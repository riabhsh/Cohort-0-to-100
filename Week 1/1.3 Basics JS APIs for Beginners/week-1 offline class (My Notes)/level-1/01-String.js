// Strings Methods
// length, indexOf, lastIndexOf, slice, substr, replace, trim, toUpperCase, toLowerCase etc...

let word = "Rishabh Maurya Maurya";
let target = "Maurya"


//1. length
function getLength(str){
    console.log("\n1. String Length:");
    console.log("String Name: ", str);
    console.log("String Length: ", str.length);
}

getLength(word);

//2. indexOf
function getindexOf(str, target){
    console.log("\n2. String Indexof:");
    console.log("String Name: ", str);
    console.log(target ,"is in Index: ", str.indexOf(target));
}

getindexOf(word, target);

//3. lastIndexof
function getLastIndexOf(str, target){
    console.log("\n3. String lastIndexOf:");
    console.log("String Name: ", str);
    console.log(target ,"is in last Index: ", str.lastIndexOf(target));
}

getLastIndexOf(word, target);

// 4. slice 
function getSlice(str, start, end){
    console.log("\n4. String Slice:");
    console.log("String Name: ", str);
    console.log("from ",start, " to ", end, "after Slice: ", str.slice(start,end));
}

getSlice(word, 4, 7);

// 5. substring

function getsubString(str, start, end){
    console.log("\n5. SubString");
    console.log("String Name: ", str);
    console.log("from ",start, " to ", end, "after SubString: ", str.substr(start,end));
}

getsubString(word, 4, 7);

// 6. replace

function replaceString(str, target, replacement){
    console.log("\n6. Replace");
    console.log("String Name: ", str);
    console.log("replace",target,"with",replacement,"after replacement:", str.replace(target, replacement));
}


replaceString(word, "Rishabh", "Coder");

// 7. split

// A delimiter is a sequence of one or more characters that specifies the start and end of two separate parts of text OR Separator
function splitString(str, delimeter){
    console.log("\n7. Split");
    console.log("String Name:",str);
    console.log("splt the '",str,"' with delimeter of '",delimeter,"' is", str.split(delimeter));
}

splitString(word, " ");

// 8. trim
// The trim() method removes whitespace from both sides of a string.

function trimString(str){
    console.log("\n8. trim");
    console.log("String Name:",str);
    console.log("After Trim:",str.trim());
}

trimString("   Rishsbh Maurya     ");

// 9. toUpperCase

function upperString(str){
    console.log("\n9. toUpperCase");
    console.log("String Name:",str);
    console.log("After UpperCase:",str.toUpperCase());
}

upperString("rishabh maurya");

// 10. toLowerCase

function lowerString(str){
    console.log("\n10. toLowerCase");
    console.log("String Name:",str);
    console.log("After LowerCase:",str.toLowerCase());
}

lowerString("RISHABH MAURYA");