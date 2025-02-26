// return function--------

function myname(firstname,lastname)
{
    let fullname=firstname+" "+lastname;
    return fullname;
}

let getmyname=myname("ishu","rajput");
console.log("my name is:", getmyname);


// ------------------------------function expression------------------------

function multiplication(a, b) {
    return a * b;
}

console.log(multiplication(2, 3));



//----------------------------------third way-----------------------------

let sum = function (a, b) {
    return a + b;
}
let ans = sum(2, 3);
console.log("print the sum:", ans);

/// 02 example

let squareofnumber=function(num)
{
    return num**2;
}
let answer=squareofnumber(8);
console.log("answer is :",answer);


//--------------- ARROW FUNCTION--------------------------


let getExp=(x,y) =>
{
    return x**y;
}
console.log(getExp(2,3));
