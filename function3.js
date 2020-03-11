function pow(x, n) {
  if (n < 1) {
    console.log(`Power ${n} is not supported, use a positive integer`);
    return undefined;
  }

  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  console.log(result);
  return result;
}

pow(5, -3)