let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

const countedNames = names.reduce((allNames, name) => {
  if (name in allNames) {
    allNames[name]++;
  } else {
    allNames[name] = 1;
  }
  return allNames;
}, {});
console.log(countedNames);

// output countedNames: { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
