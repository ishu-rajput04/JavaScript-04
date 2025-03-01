//----------------------------------------

let arr = [10, 20, 30, 40, 50]
function getsum(arr) {
    let length= arr.length;
    console.log(length);
    let sum = 0;
    for (let index = 0 ; index < length ; index++)
    {
        sum=sum+arr[index];
    }
    return sum;
};
let totalsum=getsum(arr);
console.log(totalsum);

// more easy

