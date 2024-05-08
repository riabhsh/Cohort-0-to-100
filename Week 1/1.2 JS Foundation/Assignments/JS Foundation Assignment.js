// JS Foundation Assignment
// 1. Create a Counter in Javascript(Counts down from 30 to 0)
// 2. Calculate a time it takes between a setTimeout call and the Inner Function running
// 3. Create a terminal Clock (HH:MM:SS)

// 1. Create a Counter in Javascript(Counts down from 30 to 0)
function startCounter(){
    let num = 30;
    function repeat(){
        console.log(num);
        num--;
        if(num >= 0){
            counter();
        }
        else{
            console.log("END")
        }
    }

    function counter(){
        setTimeout(repeat, 1000);
    }

    console.log("1. Create a Counter in Javascript(Counts down from 30 to 0).")
    counter(); 
}
// startCounter();
// ----------------------

// 2. Calculate a time it takes between a setTimeout call and the Inner Function running
function startCalculation(){
    console.log("2. Calculate a time it takes between a setTimeout call and the Inner Function running.");
    function greeting(){
        let a = 0;
        for(let i = 0; i <= 1000000000; i++){
            a = a+i;
        }
        let calcTime2 = new Date();
        let endcalcTime = calcTime2.getTime();
        console.log("End time: "+endcalcTime+"ms");
        let time = endcalcTime - startcalcTime;
        console.log("Total Time:",parseInt(time)+"ms");
    }

    let calcTime = new Date();
    let startcalcTime = calcTime.getTime();
    console.log("Start time: "+startcalcTime+"ms");
    setTimeout(greeting, 1);
}
// startCalculation();
// ----------------------
    
// 3. Create a terminal Clock (HH:MM:SS)
function startClock(){
    function clock(){
        let hh = new Date().getHours().toString().padStart(2, '0');
        let mm = new Date().getMinutes().toString().padStart(2, '0');
        let ss = new Date().getSeconds().toString().padStart(2, '0');
    
        console.log(`${hh}:${mm}:${ss}`);
    }
    
    console.log("3. Create a terminal Clock (HH:MM:SS)");
    console.log("HH:MM:SS (ctrl + c for quit)")
    setInterval(clock, 1000);
}
// startClock();
// ----------------------