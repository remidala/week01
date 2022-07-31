let multiplesTwoo = []
for (let i=0; i <20; i++){
    if (i%2 == 0){
        multiplesTwoo.push(i);
    }
}
console.log(`Numbers devisible by 2 between 0-20 are: ${multiplesTwoo}`);

let age = 15;
    while (age < 18) {
        console.log(`You are a child`);
        age++;
    }

console.log(`You are an adult`);

let cards = [`diamond, spade, heart, club`];
while (currentCard != `spade`) {
    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random()*4)];
} 
console.log(currentCard);
