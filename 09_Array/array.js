
//------------lets create an array--------


//----------------- first way by literals[]----------------


let arr = [1, 2, 3, 4, 5];
console.log(arr);

let arr2 = ["ishu", 21, "delhi", "()"];
console.log(arr2);

//-------------- second way by array constructor-------------

let arr3 = new Array('ishu', 1, 5, true);
console.log(arr3);

//------------------access an element
console.log(arr3[3]);


//------------methods or function in an array----------------------------------------

let brr = [2, 4, 80, 'ishu', '()']   // brr is the array name

//--------------- 01 push
brr.push("rajput");

//--------------- 02 pop
brr.pop('rajput');

//--------------- 03 shift
brr.shift();

//--------------- 04 unshift
brr.unshift(2);



//--------------- 05 slice
brr.slice(2, 4);
console.log(brr.slice(2, 4));


// -------------- 06 splice

brr.splice(4, 0, 'rajput');
console.log(brr);



//--------------------------------7,8,9 are in diffent file --> map,filter,reduce.........................



//--------------- 10 sort
let arr01 = [9, 3, 5, 8, 1, 3, 4, 6]  // in ascending order
arr01.sort()
console.log(arr01)

// ----------------11 index of

let fruits = ['apple', 'litchi', 'banana', 'peach', 'berry']
console.log(fruits.indexOf('litchi'));
