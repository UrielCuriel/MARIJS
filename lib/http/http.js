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
        console.log(_req.cookies);
        console.log(_req.method);
        console.log(_req.params);
        console.log(_req.path);
        const _res = {
            message: 'hello world',
            status: true
        };
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*');
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(_res));
    }
}
exports.Http = Http;
