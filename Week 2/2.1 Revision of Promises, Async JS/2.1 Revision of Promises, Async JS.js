// Three Big Humps in Full Stack
// 1. Async nature of Javascript
// 2. React 
// 3. JS to TS

// +++ 1. CALLBACKS +++
// We use callbacks for prevent DRY(Don't Repeat Yourself)
// When A function take a function as a parameter then we call this callback
// note: mostly callbacks is for Async

// EXAMPLES
function callbacksDemo(){

    function square(a){
        return a * a;
    }

    function cube(a){
        return a * a * a;
    }

    function sumOfTwoSquares(a, b){
        let n1 = square(a);
        let n2 = square(b);
       
        return n1 + n2;
    }

    function sumOfTwoCubes(a, b){
        let n1 = cube(a);
        let n2 = cube(b);
        
        return n1 + n2;
    }

    function sumOfSomething(a, b, callbackfn){
        let n1 = callbackfn(a);
        let n2 = callbackfn(b);

        return n1 + n2
    }

    console.log("+++ CAllBACK DEMO +++");
    // Without callback 
    console.log(sumOfTwoCubes(2,2));

    // With Callback you have to just write the third argument as function
    console.log(sumOfSomething(2, 2, cube));

}
// callbacksDemo();
// --------------------------

// +++ 2. Async Functions +++
// Your Javascript dosn't have access to everything immediately
// there are some tasks it needs to wait for example-
// 1. read a file
// 2. write a file 
// 3. sending newtwork request 
// 4. a delibrate timeout etc..

// setTimeout, readFile, setInterval etc.. webAPis functions that are provide by the browser or node js
// works out of from the Call Stack... i.e web Apis, callback Queue and eventloop then callback stack
// async inside async inside async so on and so forth is called CALLBACK

// EXAMPLES
function asyncDemo(){
    console.log("prints Before!");
    console.log("prints Before!");

    function text(){
        console.log("hi there!");
    }
    setTimeout(text, 1000);

    console.log("prints Before!");
    console.log("prints Before!");
}
// asyncDemo();

function asyncDemo2(){
    console.log("prints Before!");
    console.log("prints Before!");

    const fs = require('fs');
    
    fs.readFile("demo.txt", "utf-8", function(err, data){
        console.log(data);
    })

    console.log("prints Before!");
    console.log("prints Before!");
}
// asyncDemo2();
// --------------------------

// +++ 3. Promises(then) +++
// its just a syntactical sugar on top of Async
// it's a cleaner way of writing a Callbacks
// Under the hood Promises is converted into CallBacks


// --------------------------



// ++++++++++++++++++++++++++++++++
// --------------------------------
// This is From Shradha Khapra's Lecture video on async javascript
// --------------------------------
// ++++++++++++++++++++++++++++++++

//1. Callback and Callback Hell
function CallbackDemo(){
    function data(num, numNext){
        setTimeout(() => {
            console.log("Data:", num);
            if(numNext){
                numNext();
            }
        }, 2000);
    }
    
    // Callback HEll
    
    console.log("Getting Data...1");
    data(1, () => {
        console.log("Getting Data...2");
        data(2, () => {
            console.log("Getting Data...3");
            data(3, () => {
                console.log("Getting Data...4");
                data(4);
            })
        });
    });
}

//2. Promises and Promises Chaining
function PromiseDemo(){
    function promiseData(data){
        return new Promise((resolve, reject) => {
            console.log("Promise Data:", data);
            resolve("success");
            // reject("reject");
        });
    }
    
    let result = promiseData(1);
    console.log(result);
    
    promiseData(2).then((res) => {console.log("resolve message:", res);});
    promiseData(2).catch((err) => {console.log("error message:", err);});
}
function PromiseChainingDemo(){
    function PromiseChaining(data){
        return new Promise((resolve, reject) => {
            setTimeout(() => {console.log("data:",data); resolve("Success");}, 2000);
        });
    }

    console.log("Getting Data...1");
    PromiseChaining(1).then((res) => {
        console.log("Getting Data...2");
        PromiseChaining(2).then((res) => {
            console.log("Getting Data...3");
            PromiseChaining(3).then((res) => {
                console.log("Getting Data...4");
                PromiseChaining(4);
            });
        });
    });
}

// 3. Async-Await
function AsyncAwaitDemo(){
    function api(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Weather Data");
                resolve(200);
            }, 1000);
            });
    }

    // async function getWeather(){
    //     await api();
    // }
    // getWeather();
    // or we can use IIFE or Anonymous function for get rid of unecessary function call 

    (async () => {
        await api();
    })();
}
function AsyncAwaitHeaven(){
   
    function getData(data){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Data:",data);
                resolve(200);
            }, 1000);
        });
    };

    (async () => {
        console.log("Getting Data...1");
        await getData(1);
        console.log("Getting Data...2");
        await getData(2);
        console.log("Getting Data...3");
        await getData(3);
        console.log("Getting Data...4");
        await getData(4);
    })();

}
//+++ Run bellow functions one by one +++
// CallbackDemo();
// PromiseDemo();
// PromiseChainingDemo();
// AsyncAwaitDemo();
// AsyncAwaitHeaven();


// ++ Callbacks, Promises & Async Await (imp points)++
// async await >> promise chains >> callback hell
// above things solves the problem of async management like when to run when 
// async always returns Promise
// await is valid only under async function
// we have to always put async-await inside a function and tbh this is unnecessary thing thats why we have a better thing which is IIFE: Immedietely Invoked Function Expression
// IIFE is a function that is called immediately as soon as it is defined
// or Self Executing Anonymous function
// 

// eg:
{
    (function (){
        // ...
    })();

    (() => {
        // ...
    })();

    (async () => {
        // ...
    })();
}
