"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

for (let op of operations) {
    try {
        let result;
        switch (op) {
            case "add": result = num1 + num2; break;
            case "subtract": result = num1 - num2; break;
            case "divide":
                if (num2 === 0) throw new Error("Divide by zero");
                result = num1 / num2;
                break;
            case "power": result = Math.pow(num1, num2); break;
            case "root":
                if (num1 < 0) throw new Error("Root of negative number");
                result = Math.sqrt(num1);
                break;
            default: throw new Error("InvalidOperationError");
        }
        console.log(`Operation: ${op}, Result: ${result}`);
    } catch (err) {
        console.log(`Operation: ${op}, Error: ${err.message}`);
    }
}