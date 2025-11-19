"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

let cleanData = [];

for (let i = 0; i < rawData.length; i++) {
    try {
        let obj = JSON.parse(rawData[i]);

        if (!obj.user || !obj.age) throw new Error("Missing keys");

        obj.age = Number(obj.age);
        if (obj.age < 18) throw new Error("Underage user");

        cleanData.push(obj);
    } catch (err) {
        console.log(`Error at line ${i + 1}: ${err.message}`);
    }
}

console.log("Clean Data:", cleanData);