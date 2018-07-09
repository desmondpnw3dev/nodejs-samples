// Installed npm packages: jquery underscore request express
// jade shelljs passport http sys lodash async mocha chai sinon
// sinon-chai moment connect validator restify ejs ws co when
// helmet wrench brain mustache should backbone forever debug jsdom


/* Write a function that takes two parameters,
1.) a string of letters and
2.) an array of elements from the periodic table of elements. If the first argument contains a match from the array of elements, encapsulate said match in square brackets.

Examples:

function fn(str, arr) {
  // write your code here
}

console.log(fn('Breaking Bad', ['Br', 'Ba', 'Po', 'He'])); // "[Br]eaking [Ba]d"
console.log(fn('Harry Potter', ['Br', 'Ba', 'Po', 'He'])); // "Harry [Po]tter"

*/

function fn(str, arr) {
  let ret = str;

  let filters = arr.filter(x => ret.includes(x))
  filters.forEach(item => {
    ret = ret.replace(item,`[${item}]`);
  });
  return ret;
}

console.log(fn('Breaking Bad', ['Br', 'Ba', 'Po', 'He'])); // "[Br]eaking [Ba]d"
console.log(fn('Harry Potter', ['Br', 'Ba', 'Po', 'He'])); // "Harry [Po]tter"
