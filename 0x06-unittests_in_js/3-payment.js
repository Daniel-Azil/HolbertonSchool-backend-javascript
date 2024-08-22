const Utils = require("./utils");

function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const paymentResult = Utils.calculateNumber("SUM", totalAmount, totalShipping);
    console.log(`The total is: ${paymentResult}`);
}

module.exports = sendPaymentRequestToApi;
