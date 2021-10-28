const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: [${actual}] === [${expected}]`);
  } else console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
};

function findKey(object, callback) {
  const keysArray = Object.keys(object);

  for (let i = 0; i < keysArray.length; i++) {
    const truth = callback(object[keysArray[i]]);
    if (truth === true) {
      return keysArray[i];
    }
  }
}
