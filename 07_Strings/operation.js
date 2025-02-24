// ----------Concatenation

let op1 = 'english ';
let op2 = 'HINDI ';
//let finalans = op1 + op2;
let finalans = `${op1}${op2}`;
console.log(finalans);

//----------lenght of string

console.log(op1.length);   // also include space here, 7+1=8


//-----------uppercase/lowercase

console.log(op1.toUpperCase());
console.log(op2.toLowerCase());

//-----------substrings

let a = "ishurajput";
console.log(a.substring(4));
console.log(a.substring(2, 4));


//-----split


let sentence = "hello ji kya hal hai apke";
let word = sentence.split(' ');
console.log(word);

sen = "hello \ji \"kya\" \hal \hai \apke";    // -------> if we want to print as it is 
console.log(sen);


//-----------join

console.log(word.join("_"));