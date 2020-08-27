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

    async runTests() {
        for(let file of this.testFiles) {
            //global: nodejs var, similar to window but for js
            //is available to every file
            const beforeEaches = [];
            global.beforeEach = (fn) => {
                beforeEaches.push(fn);
            };

            //global allows us to use mocha it func here
            global.it = (desc, fn) => {
                //call each func
                beforeEaches.forEach(func => func());

                try {                
                    fn(); //then run it statement
                    console.log(`ran global.it statement: OK - ${desc}`);
                } catch (err) {
                    console.log(`X - ${desc}`);
                    console.log("\t", err.message); //only err message, \t indents message
                }

            };


            //wrap with try/catch to shorten syntax errors
            try {
                require(file.name); //node will find file, load up and execute code inside 
            } catch(err) {
                console.log(err);
            }
        }
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
                //arr of dir's childFiles
                const childFiles = await fs.promises.readdir(filepath);

                //push all els of childFiles
                files.push(...childFiles.map(f => 
                    path.join(file, f)
                )); 
                //map will join the earlier file folders of the path to current file to get full path of each childFiles
                //before map: /Users/Joe/widgets 
                //after map: /Users/Joe/Movies/widgets
            }
        }
    }
}

module.exports = Runner;