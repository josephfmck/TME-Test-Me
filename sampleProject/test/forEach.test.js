const assert = require("assert");
const { forEach } = require("../index");

//mocha setup
it("should sum an array", () => {
    const numbers = [1,2,3];

    let total = 0;

    forEach(numbers, (value) => {
        total += value;
    });

    //assert test
    assert.strictEqual(total, 6);
});


//to run in terminal normally: mocha
//now want to run in terminal: tme
