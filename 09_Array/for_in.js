console.log("radhe radhe ")

let obj={
    Name:"ISHU",
    age:21,
    height:"157cm",
    weight:"61kg",
    greet: function()
    {
        console.log("welcome to this script");
    }
};

for (let key in obj) {
    console.log(key,'',obj[key]);
}