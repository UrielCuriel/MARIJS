"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http2 = require("http2");
var fs = require("fs");
var request_1 = require("./request");
var Http;
(function (Http) {
    Http.MIDDLEWARES = [];
    var Application = /** @class */ (function () {
        function Application() {
            this.middleWares = [];
            this.Routes = [];
            this.loadMiddlewares();
        }
        Application.prototype.loadMiddlewares = function () {
            var _this = this;
            Http.MIDDLEWARES.forEach(function (_m) {
                _this.middleWares.indexOf(_m) != -1 ? _this.middleWares.push(_m) : null;
            });
        };
        Application.prototype.watch = function (req, res) {
            var _req = new request_1.Request(req);
            this.middleWares.forEach(function (_m) {
                console.log(_m);
                _m(_req, res);
            });
        };
        Application.prototype.init = function (serverOptions) {
            var _this = this;
            var server = http2.createSecureServer({
                key: fs.readFileSync('localhost-privkey.pem'),
                cert: fs.readFileSync('localhost-cert.pem'),
                allowHTTP1: true,
            });
            server.on('request', function (req, res) {
                _this.watch(req, res);
            });
            server.listen(serverOptions.port, serverOptions.host, function (res) {
                console.log(res);
                console.log("listen on: https://localhost:8443");
            });
        };
        Application.prototype.addMiddleWare = function (middleWare) {
            console.log(middleWare[0]);
            this.middleWares.push(middleWare);
            console.log(this.middleWares);
        };
        return Application;
    }());
    Http.Application = Application;
    function MiddleWare(options) {
        return function (target, key, descriptor) {
            options ?
                options.app ? options.app.addMiddleWare(target[key])
                    : Http.MIDDLEWARES.push(target[key])
                : Http.MIDDLEWARES.push(target[key]);
        };
    }
    Http.MiddleWare = MiddleWare;
})(Http = exports.Http || (exports.Http = {}));
