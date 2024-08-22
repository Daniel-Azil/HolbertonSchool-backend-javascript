const { describe, it } = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./3-payment");
const Utils = require("./utils");
const assert = require("assert");

describe("sendPaymentRequestToApi", function() {
	it("should check that Utils.calculateNumber is called once", function() {
		const spyUtils = sinon.spy(Utils, "calculateNumber");

		sendPaymentRequestToApi(50, 24.52);

		assert(spyUtils.calledOnce);
		spyUtils.restore();
	});
});
