#!/usr/bin/env node

//*to run in terminal:  tme

const Runner = require("./runner");

const runner = new Runner();

//helper function to use async await
const run = async () => {
    await runner.collectFiles(process.cwd()); //ANY current working directory tme is executed from
    
    runner.runTests();
};


run();