function tail(arr) {
  let newarr = [];
  newarr = arr.slice(1);
  return newarr;
}
console.log(tail(["Yo Yo", "Lighthouse", "Labs"]));

// Test Case: Check the original array

module.exports = tail;
