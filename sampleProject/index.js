//sampleProject of tests to run our tme on
module.exports = {
    forEach(arr, func) {
        for(let element of arr) {
            func(element);
        }
    }
};