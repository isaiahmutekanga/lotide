const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
};

function eqArrays(arr1, arr2) {
  var i = arr1.length;
  while (i--) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

module.exports = eqArrays;
