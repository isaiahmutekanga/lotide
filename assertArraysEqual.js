function assertArraysEqual(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`${array1} and ${array2} are equal!😀`);
  } else console.log(`${array1} and ${array2} are not equal!🥲`);
}

function eqArrays(arr1, arr2) {
  if (arr1 == arr2.toString()) {
    return true;
  } else return false;
}

assertArraysEqual([1, 2, 3], [1, 2, 2]);
