const { describe, it } = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');

chai.use(chaiHttp);
const { expect } = chai;

describe("GET /health", () => {
  it("should return 'Server is healthy'", async () => {
    const res = await chai.request(app).get("/health");
    expect(res).to.have.status(200);
    expect(res.text).to.equal("Server is healthy");
  });
});