// ---------------------- 09 reduce function

let arr = [10, 30, 20, 40]
let ans = arr.reduce((acc, curr) => {
    return acc + curr;
}, 10)
console.log(ans)