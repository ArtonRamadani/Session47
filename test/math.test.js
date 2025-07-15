const { describe } = require("mocha");
const { add } = require("../helpers/math");

describe("Add Function Test", () => {
    it("duhet te kthej rezultatin e dy numrave", async () => {
        const { expect } = await import("chai");
        expect(add(3, 5)).to.equal(8)
    })
})