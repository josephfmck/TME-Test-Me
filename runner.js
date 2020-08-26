//*contains code relating to process of: collecting all files, calling function with environment setup, and run each test file

const fs = require("fs");


//*finds all files in ".test.js" recursively through a folder
//*Store a reference to each file we find
//*After getting a full list of the test files, execute them one by one
class Runner {
    //store reference in constructor
    constructor() {
        this.files = [];
    }
    
    //Breadth First directory search algorithm
    //targetPath is absolute path we want to search through
    async collectFiles(targetPath) {
        // targetPath === /Users/....
        const files = await fs.promises.readdir(targetPath);

        return files;
    }
}

module.exports = Runner;