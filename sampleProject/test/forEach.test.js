const assert = require("assert");
const { forEach } = require("../index");

let numbers;
beforeEach(() => {
    numbers = [1,2,3];
});


//mocha setup
it("should sum an array", () => {
    let total = 0;

    forEach(numbers, (value) => {
        total += value;
    });

    //assert test
    assert.strictEqual(total, 6);
    numbers.push(3); //throw in bug thats fixed by global.it in runner.js
});

it("beforeEach is ran each time", () => {
    assert.strictEqual(numbers.length, 4);
});

//to run in terminal normally: mocha
//now want to run in terminal: tme
