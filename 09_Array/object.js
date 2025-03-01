//-------------------how we create an object

let obj = {
    Name : "ishu",
    age : "21",
    "full name": "ishu rajput",
}
console.log(obj);


//--------------inserting function in it---------------

let obj1={
    Name:"Ram",
    age:"21",

    greet: function()
    {
        console.log("welcome to this script");
    }
};
console.log(obj1);
obj1.greet();


//----------------shallow copy

let obj2=obj;
console.log(obj2);