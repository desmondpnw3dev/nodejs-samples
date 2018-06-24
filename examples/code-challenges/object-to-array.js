// COVERT JSON ARRAY LIKE OBJECT TO AN ACTUAL INDEXED ARRAY OF OBJECTS
// RETURNS INDEXED ARRAY

const isObj = o => o !== null && typeof o === 'object';

/**
 * objectToArray
 *
 * @param  {array} objCollection object of objects (JSON tree) 
 * @return {array}               indexed array
 */
function objectToArray(objCollection) {
    let arr = [];
    Object.keys(objCollection).forEach((key, index) => {
        if (isObj(objCollection[key])) {
            let obj = {};
            obj = objCollection[key];
            arr.push(obj);
        }
    });
    return arr;
}
