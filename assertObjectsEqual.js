const eqObjects = function (object1, object2) {
  return JSON.stringify(object1) === JSON.stringify(object2);
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect; // <= add this line

  if (eqObjects(actual, expected) === true) {
    console.log(`${inspect(actual)} and ${inspect(expected)} are equal!😀`);
  } else
    console.log(`${inspect(actual)} and ${inspect(expected)} are not equal!🥲`);
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);
