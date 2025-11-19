"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

let valid = [];
let invalid = [];

for (let tx of transactions) {
    try {
        if (tx === null) throw new Error("Null transaction");
        if (!("id" in tx) || !("amount" in tx)) throw new Error("Missing fields");
        if (tx.amount < 0) throw new Error("Negative amount");

        valid.push(tx);
    } catch (err) {
        console.log(`ransaction error: ${err.message}`);
        invalid.push(tx);
    }
}

console.log("Valid Transactions:", valid);
console.log("Invalid Transactions:", invalid);