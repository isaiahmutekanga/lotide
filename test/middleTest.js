const middle = require("../middle");
const assert = require("chai").assert;

describe("middleTest", () => {
  it("returns 5 in [2,4,5,6,7]", () => {
    assert.strictEqual(middle([2, 4, 5, 6, 7]), 5);
  });
});
// middle([2, 4, 5, 6, 7]);
