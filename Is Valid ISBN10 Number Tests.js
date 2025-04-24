pm.test("1. Content-Encoding is gzip", function () {
    pm.response.to.have.header("Content-Encoding", "gzip");
});

pm.test("2. Server is Microsoft-IIS/10.0", function () {
    pm.response.to.have.header("Server", "Microsoft-IIS/10.0");
});

pm.test("3. Web-Service is DataFlex 18.2", function () {
    pm.response.to.have.header("Web-Service", "DataFlex 18.2");
});

pm.test("4. Referrer-Policy is strict-origin-when-cross-origin", function () {
    pm.response.to.have.header("Referrer-Policy", "strict-origin-when-cross-origin");
});

pm.test("5. Permissions-Policy disables interest-cohort", function () {
    pm.response.to.have.header("Permissions-Policy", "interest-cohort=()");
});

pm.test("6. HSTS is correctly configured", function () {
    const hsts = pm.response.headers.get("Strict-Transport-Security");
    pm.expect(hsts).to.include("max-age=15768000");
    pm.expect(hsts).to.include("includeSubdomains");
});

pm.test("7. Cache-Control is private, max-age=0", function () {
    pm.response.to.have.header("Cache-Control", "private, max-age=0");
});

pm.test("8. Date header contains 2025", function () {
    const date = pm.response.headers.get("Date");
    pm.expect(date).to.include("2025");
});


pm.test("9. Content-Length is 302", function () {
    pm.expect(pm.response.headers.get("Content-Length")).to.eql("302");
});

pm.test("10. Vary is Accept-Encoding", function () {
    pm.response.to.have.header("Vary", "Accept-Encoding");
});
