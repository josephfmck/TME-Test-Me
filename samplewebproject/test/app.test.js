const assert = require("assert");
const render = require("../../render");

it("has a text input", async () => {
    const dom = await render("index.html");

    const input = dom.window.document.querySelector("input");

    assert(input); //throws err if not found
});

it("shows a success message with a valid email", async () => {
    //render dom
    const dom = await render("index.html");

    //changing input
    const input = dom.window.document.querySelector("input");
    input.value = "saajk@sf.com";

    //select form and simulate submitting form event
    const form = dom.window.document
    .querySelector("form")
    .dispatchEvent(new dom.window.Event("submit"));

    const h1 = dom.window.document.querySelector("h1");

    //html of h1 should be exact same as it is in index.js
    assert.strictEqual(h1.innerHTML, "looks good@!");
});

it("shows a fail message with an invalid email", async () => {
    //render dom
    const dom = await render("index.html");

    //changing input
    const input = dom.window.document.querySelector("input");
    input.value = "saajks";

    //select form and simulate submitting form event
    const form = dom.window.document
    .querySelector("form")
    .dispatchEvent(new dom.window.Event("submit"));

    const h1 = dom.window.document.querySelector("h1");

    //html of h1 should be exact same as it is in index.js
    assert.strictEqual(h1.innerHTML, "invalid email@!");
});