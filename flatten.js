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

function flatten(array) {
  // array.forEach((element) => {
  //   if (Array.isArray(element)) {
  //     element.toString();
  //   }
  // });
  let newarr = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      // for (let y = 0; y < array[i].length; y++) {
      //   newarr = array[i][y];
      // }
    }
  }
  return array;
}
// const hi = [3, 4];

// let king = hi.toString();
// console.log(king);

console.log(flatten([1, 2, [3, 4], 5, [6]]));
