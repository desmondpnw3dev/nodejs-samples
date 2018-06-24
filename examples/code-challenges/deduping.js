// test 1 dedupe array of numbers - return unique array
let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];

/**
 * dedupeNumArr
 *
 * @param  {array} arr array of numbers
 * @return {array}     unique array of numbers
 */
function dedupeNumArr(arr = []) {
    let result = arr.sort().reduce((accumulator, current) => {
        const length = accumulator.length
        if (length === 0 || accumulator[length - 1] !== current) {
            accumulator.push(current);
        }
        return accumulator;
    }, []);
    return result;
}
console.log(dedupeNumArr(arr)); //[1,2,3,4,5]

// test 2 - dedupe array of objects by property - return unique array
let arr2 = [
    { name:'desmond', age:28 },
    { name:'desmond', age:28 },
    { name:'barry',   age:26 },
    { name:'wally',   age:21 },
    { name:'cisco',   age:21 }
];

/**
 * dedupeByProp
 *
 * @param  {array}  arr   array of objects
 * @param  {string} prop = 'name' property to dedupe
 * @return {array}                unique array
 */
function dedupeByProp(arr = [],prop = 'name') {
    let result = arr.sort().reduce((accumulator, current) => {
        const length = accumulator.length;
        if (length === 0 || accumulator[length - 1][prop] !== current[prop]) {
            accumulator.push(current);
        }
        return accumulator;
    }, []);
    return result;
}
console.log(dedupeByProp(arr2,'name')); //[ { name:'desmond', age:28 },{ name:'barry',   age:26 },{ name:'wally',   age:21 }]
