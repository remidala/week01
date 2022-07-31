// line comment

/*
block
comment
*/

/*
data types
*/

// string
console.log(`Hello World`);
console.log("Hello World");
/* 
work with string
uppercase
lowercase
length
reverse
chain
*/


// numbers
console.log(500);
/*
work with numbers:
Arithmetic Operators for calculations
+
-
*
**
/
%
++
--
Assignment Operators for storing values
=
*=
+=
/=
-=
++
--
*/

// boolean (true or false)
console.log(true);
console.log(false);
// logical and, or

//undefined
console.log(undefined);

//null
console.log(null);

//array
//Array<_>
// array of something
// string array
console.log(`Mary, Bill, John, Michael`[2]);

// number array
console.log(2, 8,14,11[3]);

//multiple arrays
//array<array<numbers>>
console.log([[2,6,8],[9,7,1],[54,21,79]]);

//object
console.log(
    [
        {
            firstName: `Michael`,
            secondName: `Rider`,
            age: 57,
        }
    ][secondName] 
    //lookup - or [`secondName`]    
);

console.log(
    [
        {
            firstName: `Michael`,
            secondName: `Rider`,
            age: 57,
            address: {
                street: `Eastbourne Road`,
                city: `Liverpool`
            }
        }
].city.street
);

console.log(
    [
        {
            brand: `Samsung`,
            name:`Galaxy`,
            price: 250,
            provider:{
                country:`DE`,
                name:`T-Mobile`
            }
        },
        {
            brand: `Apple`,
            name:`iPhone x`,
            price: 260,
            provider:{
                country:`GB`,
                name:`VirginMedia`
            }
        },
        {
            brand: `Huawei`,
            name:`10`,
            price: 190,
            provider:{
                country:`Germany`,
                name:`Vodafone`
            }
        },
    ][1].brand
);
    




