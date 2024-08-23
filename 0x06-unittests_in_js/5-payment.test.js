const {describe, it} = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./5-payment");
const expect = require("chai").expect;

describe("sendPaymentRequestToApi", function() {
    beforeEach("Allows spy to be used in each test", function() {
	sinon.spy(console, "log");
    });
    afterEach("Calls spy after each test", function() {
	console.log.restore();
    });
    it("See to it that console.log calls the right argument", function() {
	sendPaymentRequestToApi(100, 20);

	expect(console.log.withArgs("The total is: 120").calledOnce).to.be.true;
    });
    it("See to it that console.log calls the right argument", function() {
	sendPaymentRequestToApi(10, 10);

	expect(console.log.withArgs("The total is: 20").calledOnce).to.be.true;
    });
});
