function toCamelCase(str) {
  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map( (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1) ) // capitalizes first letters of all array items except the first one
    .join(''); // joins words with no spaces
}

console.log(toCamelCase("example-camel-one"))