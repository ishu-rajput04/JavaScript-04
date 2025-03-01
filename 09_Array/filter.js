//----------------- 08 filter function

let arr = [10, 31, 45, 20, 22, , 32, 40]
let ans = arr.filter((Number) => {
    if (Number % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
});
console.log(ans);


// another example

let arr1 = new Array(4, 'ishu', "()", 73, 'puneet', 38, 'shivansh')
let ishu=arr1.filter((value) => {
    if (typeof (value) === "number") {
        return true;
    }
    else {
        return false;
    }
});
console.log(ishu)