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

const letterPositions = function (sentence) {
  sentence = sentence.replace(/\s/g, "");

  const output = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] in output) {
      output[sentence[i]].push(i);
    } else {
      output[sentence[i]] = [i];
    }
  }
  return output;
};

console.log(letterPositions("lighthouse in the house"));
