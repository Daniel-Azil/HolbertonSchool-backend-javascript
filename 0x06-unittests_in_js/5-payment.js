const Utils = require("./utils");

function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const modifiedResult = Utils.calculateNumber("SUM", totalAmount, totalShipping);
    console.log(`The total is: ${modifiedResult}`);
}

module.exports = sendPaymentRequestToApi;
