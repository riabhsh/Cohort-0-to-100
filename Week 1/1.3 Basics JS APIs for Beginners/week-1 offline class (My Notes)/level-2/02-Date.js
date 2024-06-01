// Date is A global Class in JAVASCRIPT you can use it out of the box, it's not primitve its a premade for use

// let myDate = new Date();

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(typeof myDate);

// // month index start with 0 thats why 4 for may no 5
// let myCreatedDate = new Date(2024, 4, 7);
// console.log(myCreatedDate.toDateString());

// // yyyy:mm:dd:hh:mm:ss
// let myCreatedDate2 = new Date(2024, 4, 7, 5, 32, 12);
// console.log(myCreatedDate2.toLocaleString());
 
// //yyyy-mm-dd
// let myCreatedDate3 = new Date("2024-01-24");
// console.log(myCreatedDate3.toLocaleString());

// // mm-dd-yyyy
// let myCreatedDate4 = new Date("01-24-2024");
// console.log(myCreatedDate4.toLocaleString());


// class Rishabh{
//     hello(){

//     }
// }

// // Date TIMESTAMPS
// let myTimeStamp = Date.now();

// // It is a time from 01Jan1970 to today in ms.
// console.log(myTimeStamp);

// console.log(myCreatedDate4.getTime());

// // Convert md into seconds without decimal values
// console.log("ms: ", Date.now()+"ms");
// console.log("Seconds: "+ Date.now()/1000+"s");

// console.log("Seconds: "+ Math.floor(Date.now()/1000)+"s");
// // or
// console.log("Seconds: "+ parseInt(Date.now()/1000)+"s");


// // Other Date Methods

// let newDate = new Date();

// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMonth() + 1);

// // important
// let newDateUpdate = newDate.toLocaleString('default', {
//     weekday: "long",
//     month: "long",
//     day: "2-digit",
//     year: "numeric",
//     hour: "numeric",
//     minute: "numeric",
//     hour12: true,
    
// })
// console.log(newDate.toString());
// console.log(newDateUpdate.toString());

// function addition(){
//     let a = 0;
//     for(let i = 0; i <= 10000000000; i++){
//         a = a + i;
//     }
//     return console.log("hogaya bhai");
// }

// beforeTime = new Date();
// let beforeTimeinSec = parseInt(beforeTime.getTime()/1000);



// console.log("Before Time:", beforeTimeinSec - beforeTimeinSec+"s");

// addition();

// afterTime = new Date();
// let afterTimeinSec = parseInt(afterTime.getTime()/1000);

// console.log("After Time:", afterTimeinSec - beforeTimeinSec+"s");


// HARKIRAT COHORTS HERE

function dateMethods(){
    const currentDate = new Date();
    console.log("Current Date: "+currentDate)

    // Getting Various Components of date
    console.log("Date:", currentDate.getDate());
    console.log("Month:", currentDate.getMonth() + 1); //Months are Indexed with 0
    console.log("Year:", currentDate.getFullYear());
    console.log("Hours:", currentDate.getHours());
    console.log("Minutes:", currentDate.getMinutes());
    console.log("Seconds", currentDate.getSeconds());

    // Setting Components Of date
    currentDate.setFullYear(1999);
    console.log("After setFullyear(1999):",currentDate.getFullYear());

    currentDate.setMonth(0)// 0 means Jan because index starts from 0 in month
    console.log("After setMonth(0)", currentDate.getMonth());

    // Getting and Setting time in milliseconds since 1970
    // getTime() returns the number of milliseconds since January 1, 1970 00:00:00.
    console.log("Time in milliseconds since 1970:", currentDate.getTime());

    const newDate = new Date(1999, 8, 24);
    console.log("New Date:", newDate);
}

// Example Usage for Date Methods

// dateMethods();

function clock(){
    let hh = new Date().getHours().toString().padStart(2, '0');
    let mm = new Date().getMinutes().toString().padStart(2, '0');
    let ss = new Date().getSeconds().toString().padStart(2, '0');

    console.log(`${hh}:${mm}:${ss}`);
}

// clock();
setInterval(clock, 1000);