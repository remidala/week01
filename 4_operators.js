// operators
// (number, number) => number
console.log(2*3);

/*
grouping of operators
    - numbers of operators
        1. unary
        2. binary
        3. ternary
    - location of operators
        - before: prefix
        - inside: infix
        - after: postfix
    - is there any side effect?
        1. yes
        2. no
*/

/* 
arithmetic operators
    (number, number) => number
    types:
        +, -, *, /, %
*/
console.log(7+3);
console.log(7-3);
console.log(7*3);
console.log(7/3);
console.log(7%3);

/*
comperative operators
    (any, any) => boolean
*/
// == (equality)
console.log(2==2);
console.log(2==1);

// != (not equal)
console.log(2!=2);
console.log(2!=1);

// === (identity)
console.log(2===2);
console.log(2===3);

// >=, <=, >, <, 
console.log(2<2);
console.log(2>2);
console.log(2<=2);
console.log(2<=2);

/* logic operators
    (boolean, boolean)=>boolean
    (boolean)=>boolean
*/
// and (&&)
console.log(true && false);

// or (||)
console.log(true || false);

/* 
prefix (!true)
prefix (!false)
*/
console.log(!true);
console.log(!false);

/* string operator
    +
*/
console.log("Hi" + "Daniel");
// output Hi Daniel

/*  conditional operators
    (boolean true, any1, any2)=> any1
    (boolean false, any1, any2)=> any2
*/
console.log(true ? `first` : `second`);
console.log(false ? `first` : `second`);

/* assignment operators
(var, any) => any
we use it because it`s side effect
*/
var key = 9;
console.log(key);
// I can change the value anytime.
key = 12;
console.log(key);

// increment, decrement operators
key++;
console.log(key);
key--;
console.log(key);

// +=, -=
var number = 5; // output 5
number += 10; // output 15
console.log(number);
number -= 8; // output 7
console.log(number);