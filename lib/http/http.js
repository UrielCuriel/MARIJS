"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("./request");
class Http {
    constructor() {
        this.middleWares = [];
        this.getFuncs = [];
        this.postFunc = [];
    }
    watch(req, res) {
        const _req = new request_1.Request(req);
        console.log(_req);
        res.end();
    }
}
exports.Http = Http;
