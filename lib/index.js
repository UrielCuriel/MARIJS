"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var middlewares_1 = require("./http/middlewares");
var applications_1 = require("./applications");
var Mari = /** @class */ (function () {
    function Mari() {
        this.middlewares = new middlewares_1.MiddleWares();
        applications_1.API.init({ port: 8443, host: '0.0.0.0' });
    }
    return Mari;
}());
var mari = new Mari();
