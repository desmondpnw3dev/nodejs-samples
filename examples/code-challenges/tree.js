/**
 * Helper to convert an array of objects to JSON
 * @param {array}   arr     - array of objects to convert
 */
function arrayToJSON(arr) {
  let obj = {};
  arr.forEach((item,idx) => {
    if (arr[idx] === item && item !== null) {
        obj[idx] = item;
        obj[idx].index = idx; // this will allow us to revert (object to array using same indexed sorting)
    }
  });
  return obj;
}
