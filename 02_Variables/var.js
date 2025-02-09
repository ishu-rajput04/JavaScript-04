// here we see the var as globally scoped

var age = 21;
if (true) {
    console.log(age);
}


// here, we see the var as functionally scoped

function code ()
{
    var x=30;
    console.log(x);
}
code();


// re assignment or re-declearation

var a=9;
    a=8;
    console.log(a);