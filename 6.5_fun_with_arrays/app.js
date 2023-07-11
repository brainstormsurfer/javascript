

// 1. Fill an array with 100 of the same object using the array fill
// method.
const object1 = { key: "value" };
const filledArray = Array(100).fill().map(() => ({ ...object1 }));

// 2. Create an array with numbers ranging from 1-100 using
// the Array.from method.
const numbers = Array.from({ length: 100 }, (_, i) => i + 1);
console.log(numbers);

// 3. Convert only values of an object into one array.
const object2 = { key1: 'value1', key2: 'value2', key3: 'value3' };
const valuesArray = Object.values(object2);
console.log(valuesArray);

// 4. Convert an array into one object.
const array = [['key1', 'value1'], ['key2', 'value2'], ['key3', 'value3']];
const object3 = Object.fromEntries(array);
console.log(object3);

// 5. Find out if an array is an array.
const arr = [1, 2, 3];
const isArray = Array.isArray(arr);
console.log(isArray);

// 6. Copy an array.
// ● Create a copy of an array that won’t affect the
// original array if modified.
// ● Create a copy of an array that will affect the original
// array if modified.
const originalArr = [1, 2, 3];
const copiedArr = [...originalArr];
console.log(copiedArr);

const copyWithRef = originalArr;
console.log(copyWithRef);





