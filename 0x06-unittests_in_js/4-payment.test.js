const { describe, it } = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./4-payment");
const Utils = require("./utils");
const assert = require("assert");

describe("sendPaymentRequestToApi", function() {
	it("should stub Utils.calculateNumber", function() {
		const logSpy = sinon.spy(console, "log");
		const calculateNumberStub = sinon.stub(Utils, "calculateNumber").returns(10);
		sendPaymentRequestToApi(100, 20);

		assert(logSpy.withArgs("The total is: 10").calledOnce);
		assert(calculateNumberStub.withArgs("SUM", 100, 20).calledOnce);
	});
});
