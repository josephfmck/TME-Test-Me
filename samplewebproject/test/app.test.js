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

    console.log("contents of h1", h1.innerHTML);
});