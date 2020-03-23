function filterRange(arr, x, y) {
  return arr.filter(item => (x <= item && item <= y));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(`filtered array: ${filtered}`); 
console.log(`original array, unmodifed: ${arr}`); 