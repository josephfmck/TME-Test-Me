const path = require("path");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

//*Creating a DOM we can run browser tests with

//filename= file we want to open 
const render = async (filename) => {
    const filePath = path.join(process.cwd(), filename);

    const dom = await JSDOM.fromFile(filePath, { 
        runScripts: "dangerously",
        resources: "usable"
    });


    //fix issue with delay by wrapping with promise
    return new Promise((resolve, reject) => {
        //waits until all dom els (scripts) were referencing to be loaded before executing
        dom.window.document.addEventListener("DOMContentLoaded", () => {
            resolve(dom);
        });
    });

};

module.exports = render; //export function NOT executed, run in runner.js