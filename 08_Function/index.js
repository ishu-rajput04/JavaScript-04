// create a basic function

function sayMyName()  // -------------------> define  function
{
    console.log("ishu_rajput");
}
sayMyName(); //---------------------> calling a function

// example 02

function printcounting() {
    for (let i = 0; i <= 100; i++) {
        console.log(i);
    }
}
printcounting();



// function with parameters
let num;
function printNumber(num) {
    console.log("print a number:",num);
}
printNumber(10);


//------------Multiple parameters---------


function getAverage(num1,num2)
{
    let avg=(num1+num2)/2;
    console.log("average:",avg);
}
getAverage(3,10);