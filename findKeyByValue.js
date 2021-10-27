const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: [${actual}] === [${expected}]`);
  } else console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
};

function findKeyByValue(movies, value) {
  const keysArray = Object.keys(movies);
  var test;
  for (let i = 0; i < keysArray.length; i++) {
    test = keysArray[i].toString();
    if (movies[test] === value) {
      return test;
    }
  }
}

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
