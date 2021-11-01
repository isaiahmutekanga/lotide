function tail(arr) {
  let newarr = [];
  newarr = arr.slice(1);
  return newarr;
  //return arr[arr.length - 1]
}

// Test Case: Check the original array

module.exports = tail;
