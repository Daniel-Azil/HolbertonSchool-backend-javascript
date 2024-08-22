function calculateNumber(a, b) {
    const a_value = Math.round(a);
    const b_value = Math.round(b);
    const result = a_value + b_value;
    return result;
}

module.exports = calculateNumber;
