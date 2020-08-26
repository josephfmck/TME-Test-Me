#!/usr/bin/env node

//*to run in terminal:  tme

const Runner = require("./runner");

const runner = new Runner();

//helper function to use async await
const run = async () => {
    const results = await runner.collectFiles(process.cwd()); //current working directory tme is executed from, WORKS FOR ANY directory
    console.log(results);
};


run();