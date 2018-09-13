module.exports = function getZerosCount(number, base) {
  let divider = [];
  let minResult = null;

  if (base > 0 && base != 1) {
    for (let i = 2; i <= base; i++) {
      while (base % i == 0 && base > 1) {
        if (!divider.includes(i)) {
          divider.push(i);
        } else {
          divider[divider.indexOf(i)] += i;
        }
        base /= i;
      }
      if (base / i == 1) {
        if (!divider.includes(i)) {
          divider.push(x);
        } else {
          divider[divider.indexOf(i)] += i;
        }
      }
    }
  } else if (base == 1) {
    divider.push(1);
  }

  divider.forEach(element => {
    let bufNum = number;
    let result = 0;
    while (bufNum > 0) {
      bufNum = parseInt(bufNum / element);
      result += bufNum;
    }
    if (result < minResult || !minResult) {
      minResult = result;
    }
  })

  return minResult; 
}

