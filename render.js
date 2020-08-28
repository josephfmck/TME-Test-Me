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

    return dom;
};

module.exports = render; //export function NOT executed, run in runner.js