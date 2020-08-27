//*contains code relating to process of: collecting all files, calling function with environment setup, and run each test file

const fs = require("fs");
const path = require("path");


//*finds all files in ".test.js" recursively through a folder
//*Store a reference to each file we find
//*After getting a full list of the test files, execute them one by one
class Runner {

    constructor() {
        //store absolute path references of testFiles 
        this.testFiles = [];
    }
    
    //Breadth First directory search algorithm
    //targetPath is absolute path we want to search through
    async collectFiles(targetPath) {
        // targetPath === /Users/....
        const files = await fs.promises.readdir(targetPath);

        for(let file of files) {
            //absolute path: targetPath/file
            const filepath = path.join(targetPath, file);

            //lstats obj has access to .isFile() and isDirectory()
            const stats = await fs.promises.lstat(filepath);

            //check if file or directory
            if (stats.isFile() && file.includes(".test.js")) {
                this.testFiles.push({ name: filepath });
            } else if (stats.isDirectory()) {
                //arr
                const childFiles = await fs.promises.readdir(filepath);

                //push all els of childFiles
                files.push(...childFiles.map(f => 
                    path.join(file, f)
                )); 
                //map will join the earlier file folders of the path to current file so no errors
                //before map: /Users/Joe/widgets 
                //after map: /Users/Joe/Movies/widgets
            }
        }
    }
}

module.exports = Runner;