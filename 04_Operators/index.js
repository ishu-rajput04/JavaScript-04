// here we see the different types of operators

//--------------------- AIRTHMETIC OPERATORS-----------------------
let a = 2;
let b = 3;
console.log(a ** b);

//----------pre and post increment------------

console.log(a++); //----------post
console.log(++a); //----------pre

//--------------------ASSIGNMENT OPERATORS-------------------------
a = a + 3;
console.log(a);



//-----------------COMPARISION OPERATORS---------------------------
console.log(10 < 11);

console.log(10 === 10);
console.log("10" == 10);

//-----------------Ternary operators---------------------

let age = 15;
let status = (age > 18) ? "i can vote" : "i can not vote"
console.log(status)


//----------------logical operartors----------------------

let ans = (true && true && true);    // && AND
console.log(ans);

let ans1 = (true || false || false);  // || OR
console.log(ans1);

let ans2 = !(true); //-------------------- ! NOT
console.log(ans2);


console.log(false || 3 || 4 || 89);

//-------------- Bitwise operators---------

console.log(5 & 0);      // And &
console.log( ~ 0);      // not ~
console.log(2^2);      // Xor ^
console.log(10>>1);    // right shift by one place
console.log(10<<1);