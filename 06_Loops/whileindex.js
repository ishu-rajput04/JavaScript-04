//-------- while loop-------

let i = 1;
while (i <= 5) {
    console.log("hello world");
    i++;
}

// //-------------- break---------

i = 1;
while (i <= 5) {
    if (i == 3)
        break;
    else
        console.log(i);
    i++;
}


//-----------continue----------

let a=1;
while(a<=4)
{   console.log("u r in loop");
    if(a==3)
       { a++;        //---- index variable for existing the infinite  loop
        continue;
       } 

    else
    console.log(a);
a++;
}