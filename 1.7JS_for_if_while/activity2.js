let numbers = [];
while(numbers.length < 1){
    let n = Math.floor(Math.random() * 50) + 1;
    if(numbers.indexOf(n) === -1) numbers.push(n);
}
console.log(numbers);