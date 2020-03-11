function multiplyNumeric(obj) {
  for (key of obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}

