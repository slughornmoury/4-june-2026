let num= 10;
let num1= 20;
// Arithmetic Operators
let result= num + num1;
console.log(result);
//  Subtraction, Multiplication, Division
let result1= num - num1;
console.log(result1);
// Multiplication
let result2= num * num1;
console.log(result2);
// Division
let result3= num / num1;
console.log(result3);

let num2= "5";
// NAN - Not a Number
let result4= num + num2;
console.log(result4);
// 
let result5= num - num2;
console.log(result5);

let y= 5;
// String Conversion
let x=toString(y);
console.log(typeof(x));

let str= "10";
// Number Conversion
let int= parseInt(str);
console.log(int);
console.log(typeof(int));

let num3= 20;
// Float Conversion
let num4=parseFloat(num3);
console.log(num4);
console.log(typeof(num4));

let num5= 0.1;
let num6=0.2;
// toFixed() method to round the result to 2 decimal places
let result6=Number((num5 + num6).toFixed(2));
console.log(result6);
console.log(typeof(result6));

// function
// function declaration
function batch7(){
console.log("Welcome to Batch 7.It's our first static function");
}
batch7();//function call

// function with parameters
function summation(a,b){
    return a+b;
}
// dynamic function call SUMMATION
let result7= summation(5,10);
let result8= summation(20,30);
let result9= summation(15,25);
console.log(result7);
console.log(result8);
console.log(result9);

// function with multiple parameters Subtraction
function subtraction(a,b,c,d){
    return a-b-c-d;
}
let result10= subtraction(130,10,20,30);
console.log(result10);
// function with multiple parameters Multiplication
function multiplication(a,b,c){
    return a*b*c;
}
let result11=multiplication(1,2,3);
console.log(result11);

let result12=multiplication(5,5,5);
console.log(result12);
// function with multiple parameters Division
function division(a,b,c){
    return a/b/c;
}
let result13=division(100,5,2);
console.log(result13);
// function with multiple parameters Modulus
function modulus(a,b){
    return a%b;
}   
let result14=modulus(16,3);
console.log(result14);
// function with multiple parameters Exponentiation
function exponentiation(a,b){
    return a**b;
}   
let result15=exponentiation(2,3);
console.log(result15);
// function with multiple parameters using all operators
function calculation(a,b,c,d,e,f){
    return (a+b-c)*d/e**f;
}
let result16=calculation(100,50,25,4,2,2);
console.log(result16);

// Arrow function
const add =(a,b)=>{
    return a+b;
}   
let result17=add(10,20);
console.log(result17);

// Arrow function with implicit return
const hello=()=>{
    console.log("Hello, welcome to Batch 7. .");
}

let person= {
    firstname:"Optimus",
    lastName:"Prime",
    age: 1000,
    location:"Cybertron",
    proffesion:"Leader",
    // fullname:()=>person.firstname+" "+person.lastName
    fullname:function(){
        return this.firstname+" "+this.lastName;
    }
};
console.log(person.fullname());
