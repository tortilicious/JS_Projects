const input = require('sync-input');

// We have imported the 'sync-input' package for you.
// This package allows you to get user input.
// Like so:
// let name = input("Type your name: ");
// let age = Number(input("Type your age: "));
// You will need it in later stages.


/*
console.log(`Prices:
Bubblegum: $2
Toffee: $0.2
Ice cream: $5
Milk chocolate: $4
Doughnut: $2.5
Pancake: $3.2`)
*/

// Object with the store data

let articles = [
    {name: "Bubblegum", earnedAmount: 202},
    {name: "Toffee", earnedAmount: 118},
    {name: "Ice cream", earnedAmount: 2250},
    {name: "Milk chocolate", earnedAmount: 1680},
    {name: "Doughnut", earnedAmount: 1075},
    {name: "Pancake", earnedAmount: 80}
]

let income = 0

console.log("Earned amount:")
for (let article of articles) {
    income += article.earnedAmount;
    console.log(`${article.name}: ${article.earnedAmount}`);
}
console.log()
console.log(`Income: $${income}`)


