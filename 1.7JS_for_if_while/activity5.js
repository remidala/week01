
let numbers = [];
while(numbers.length < 6){
    let n = Math.floor(Math.random() * 30) + 1;
    if(numbers.indexOf(n) === -1) numbers.push(n);
}
console.log(numbers);

if (numbers.length % 2 === 0) {
    console.log("Yes")
  } else {
   console.log("No") 
  }