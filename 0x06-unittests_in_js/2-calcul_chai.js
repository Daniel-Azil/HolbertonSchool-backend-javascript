function calculateNumber(type, a, b) {
    const a_value = Math.round(a);
    const b_value = Math.round(b);
    let result = 0;
    switch (type) {
    case 'SUM':
        result = a_value + b_value;
        break;
    case 'SUBTRACT':
        result = a_value - b_value;
        break;
    case 'DIVIDE':
      if (b_value === 0) {
            result = "Error";
      } else {
            result = a_value / b_value;
      }
      break;
    }
    return result;
}

module.exports = calculateNumber;
