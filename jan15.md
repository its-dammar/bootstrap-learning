// Output methods
// document.write();
document.write("Hi, I am Dammar");
document.write(" <br> <p> hello </p>");
document.write("<br>" + 98680000000);


// alert oR window.alert();
// alert("Hi, I am Prerna");

// console.log()
console.log("HI, i am pradip");


// .innerHTML
document.getElementById("demo").innerHTML = "Hi , we are learning Web Development";

// document.getElementsByClassName("demo")[2].innerHTML="Hi , Developer";

var x = document.getElementsByClassName("demo");
x[2].innerHTML = "Hi , Web Developer";


// document.querySelector(".demo").innerHTML= "Hello, Prerna & Pradip";
document.querySelectorAll("#demo").innerHTML = "Hello, Prerna & Pradip";
// loop


// operators
var x = 2;
var y = 4;
var z = x ** y;
// x^y OR 2^3
document.write("<br>" + z);

var z = x + y;
document.write("<br>" + z);

// assignement operator
{
    let x = 20;
    let y = 30;
    // x+=y  OR x= x+y;

    // y+=x  OR y= y+x;
    document.write("<br>" + (y += x));
}

// logical operator: True False (boolean)
{
    // &&: all conditions should be true: True
    // ||: at least one condition should be true: True
    let x = 2;
    let y = 20;
    let z = 15;
    let a = 15;
    document.write("<br>" + (x < y && y > z && a < x));
    document.write("<br>" + (x < y || y > z || a < x));
    document.write("<br>" + (a != x));

    document.write("<br>" + (a == x));
}


// comprasion operators
{
    let sname = "123";
    let tname = "123";
    document.write("<br>" + (sname === tname));

}

// increment and decrement
{
    let x = 100;
    x--;
    // x++ OR x+1
    document.write("<br>" + x);

}

// ternary operator
{
    let x = 20;
    let y = 20;
    document.write("<br>" + ((x != y) ? "Hi, Prerna" : "Hi,Pradip"));
}

// To the Check datatype
document.write("<br>" + (typeof ("12312312312123123")));
document.write("<br>" + (typeof (123123)));
document.write("<br>" + (typeof (true)));

var x = 2;
var y = 4;
var z = x ** y;
// x^y OR 2^3
document.write("<br>" + z);

try {
    document.write("Welcome guest!");
}
catch (err) {
    console.log(err.message);
}



//   if stement
{
    document.write("<br> If statement : ");
    let x = 20;
    let y = 3;

    if (x > y) {
        document.write("<br> x is greater Number");
    }
}

// if else 
{
    document.write("<br> If  elase statement : ");
    let x = 2;
    let y = 30;

    if (x > y) {
        document.write("<br> x is greater Number");
    }
    else {

        document.write("<br> Y is greater Number");
    }
}

// if else if statement
{
    document.write("<br> If  elase if statement : ");
    let x = 20;
    let y = 200;
    let z = 20;
    let a = 5;

    // n-1  condition comprasion

    if (x > y && x > z && x > a) {
        document.write("<br> X is greater Number");
    }
    else if (y > x && y > z && y > a) {
        document.write("<br> Y is greater Number");
    }
    else if (z > x && z > y && z > a) {

        document.write("<br> Z is greater Number");
    }
    else {
        document.write("<br> a is greater Number");
    }


}

// Nested If else 
{
    document.write("<br> nested if else statement : ");
    let x = 2;
    let y = 300;
    let z = 30;

    if (x < y) {
        if (y > z) {
            document.write("<br> Y is greater Number");
        }
        else {
            document.write("<br> Z is greater Number");
        }
    }
    else {
        document.write("<br> x is greater Number");
    }
}

// Loop
// do while loop: 
// WAP to print 1 to 10 number 
{
    let x = 1;
    do{
        document.write("<br>" + x);
        x++;
    }
    while(x<=10);
}

//  while loop: 
// WAP to print 1 to 10 number 
{
    let x = 1;
    while(x<=10){
        document.write("<br>" + x);
        x++;
    }
}

// For Loop
// WAP to print 1 to 10 number 
{
    for(let x=1; x<=10; x++){
        document.write("<br>" + x); 
    }
}

//  sun mon t w t f s

{
    let day;
    switch( new Date().getDay()){
        case 0:
            day= "Sunday";
            break;

        case 1:
            day= "Monday";
            break;

        case 2:
            day= "Tue";
            break;

        case 3:
            day= "Wed";
            break;

        case 4:
            day= "Thr";
            break;

        case 5:
            day= "Fri";
            break;

        case 6:
            day= "Sat";
            break;

         default:
            day= "The is no data";
            break;
    }
    document.write("<br>" + day); 
}

document.write("<br>" + Date()); 
document.write("<br>" + new Date().getMonth()); 
document.write("<br>" + new Date().getFullYear()); 
document.write("<br>" + new Date().getHours()); 
document.write("<br>" + new Date().getUTCDay()); 


// Function: block of code 
function add(){
    let x= 10;
    let y =30;
    document.write("<br>" + (x+y));
 }

//  call/invoke to function
 add(); 

//  parameterize
 function sub(x, y){
    return x-y;
 }
 document.write("<br>" + (sub(30, 10)));






