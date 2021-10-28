function assertArraysEqual(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`${array1} and ${array2} are equal!😀`);
  } else console.log(`${array1} and ${array2} are not equal!🥲`);
}

function eqArrays(arr1, arr2) {
  var i = arr1.length;
  while (i--) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);

assertArraysEqual(results1, words);
