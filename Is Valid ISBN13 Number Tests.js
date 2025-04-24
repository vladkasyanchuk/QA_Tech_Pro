pm.test("1. Status code 200", function () {
    pm.response.to.have.status(200);
});

pm.test("2. Content-Type: text/xml", function () {
    pm.response.to.have.header("Content-Type", "text/xml; charset=utf-8");
});

pm.test("3. Header Server exists", function () {
    pm.response.to.have.header("Server");
});

pm.test("4. Response time less than 1000 ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(1000);
});

pm.test("5. Tag IsValidISBN13Result", function () {
    pm.expect(pm.response.text()).to.include("<m:IsValidISBN13Result>");
});

pm.test("6. Value IsValidISBN13Result == true", function () {
    var xml = xml2Json(pm.response.text());
    pm.expect(xml["soap:Envelope"]["soap:Body"]["m:IsValidISBN13Response"]["m:IsValidISBN13Result"]).to.eql("true");
});

pm.test("7. Starts from SOAP Envelope", function () {
    pm.expect(pm.response.text()).to.include("<soap:Envelope");
});

pm.test("8. SOAP Fault doesn't exist", function () {
    pm.expect(pm.response.text()).to.not.include("soap:Fault");
});

pm.test("9. Result is 'true' or 'false'", function () {
    let xml = xml2Json(pm.response.text());
    let result = xml["soap:Envelope"]["soap:Body"]["m:IsValidISBN13Response"]["m:IsValidISBN13Result"];
    pm.expect(["true", "false"]).to.include(result);
});

pm.test("10. XML contains correct namespace", function () {
    pm.expect(pm.response.text()).to.include('xmlns:m="http://webservices.daehosting.com/ISBN"');
});
