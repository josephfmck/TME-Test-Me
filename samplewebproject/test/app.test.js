const { italic } = require("chalk");

const assert = require("assert");

it("has a text input", async () => {
    const dom = await render("index.html");

    const input = dom.window.document.querySelector("input");

    assert(input); //throws err if not found
});