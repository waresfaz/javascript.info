function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}

console.log(truncate('This is a longer that 20 character message to test the function.', 20));
console.log(truncate('Test', 20));
