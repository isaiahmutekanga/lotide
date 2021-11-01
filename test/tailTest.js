const tail = require("../tail");
const assertEqual = require("../assertEqual");
const assert = require("chai").assert;
const words = ["Yo Yo", "Lighthouse", "Labs"];

describe("#tail", () => {
  it("returns 2 for 'Yo Yo,'Lighthouse,'labs' ", () => {
    assert.strictEqual(tail(words).length, 2);
  });
});

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// console.log(tail(words)); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
