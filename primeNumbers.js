let n = 20;

nextPrime:
for (let i = 2; i < n; i++) {
  for (j = 2; j < i; j++) {
    if (i % j === 0) {
      continue nextPrime;
    } 
  }
  console.log(`prime number: ${i}`)
}

