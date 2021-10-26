const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
};

function tail(arr) {
  let newarr = []
  newarr = arr.slice(1)
  return newarr
  //return arr[arr.length - 1]
}
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);

// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

var globalScope = 'I\'m all up in your codes!';

if (true) {
  let globalScope = 'Not anymore, you\'re not!';
}
console.log(globalScope);

x = 12;
if(true) {
  x + 2;
  x = 4;
}
console.log(x);