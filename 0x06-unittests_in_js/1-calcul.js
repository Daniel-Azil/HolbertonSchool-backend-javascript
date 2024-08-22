function calculateNumber(type, a, b) {
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);
    let result = 0;
    switch (type) {
    case 'SUM':
        result = roundedA + roundedB;
        break;
    case 'SUBTRACT':
        result = roundedA - roundedB;
        break;
    case 'DIVIDE':
      if (roundedB === 0) {
            result = "Error";
      } else {
            result = roundedA / roundedB;
      }
      break;
    }
    return result;
}

module.exports = calculateNumber;
