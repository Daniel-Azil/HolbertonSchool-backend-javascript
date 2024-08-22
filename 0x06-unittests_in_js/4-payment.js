const Utils = require("./utils");

function sendPaymentRequestToApi(totalAmount, totalShipping) {
    let newResult = Utils.calculateNumber("SUM", totalAmount, totalShipping);
    console.log(`The total is: ${newResult}`);
}

module.exports = sendPaymentRequestToApi;
