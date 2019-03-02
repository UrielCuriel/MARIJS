"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const http2 = require("http2");
const http_1 = require("./http/http");
const handler = new http_1.Http();
const server = http2.createSecureServer({
    key: fs.readFileSync('localhost-privkey.pem'),
    cert: fs.readFileSync('localhost-cert.pem'),
    allowHTTP1: true,
}, handler.watch);
server.listen(8443, '0.0.0.0', (res) => {
    console.log(res);
    console.log(`listen on: https://localhost:8443`);
});
