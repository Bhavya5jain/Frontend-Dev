
/**
 * applyOperation takes an array and a callback function.
 * It applies the callback to each element.
 */
function applyOperation(numbers, operation) {
  return numbers.map(operation);
}

// Double each number
const doubled = applyOperation([1, 2, 3, 4], num => num * 2);
console.log("Doubled:", doubled);

// Square each number
const squared = applyOperation([1, 2, 3, 4], num => num ** 2);
console.log("Squared:", squared);