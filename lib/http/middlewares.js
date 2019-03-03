"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("./http");
var request_1 = require("./request");
var applications_1 = require("../applications");
var MiddleWares = /** @class */ (function () {
    function MiddleWares() {
    }
    MiddleWares.prototype.bodyParser = function (req) {
        console.log('bodyPaser');
        var type = req.headers["content-type"];
        var content = '';
        if (req.httpRequest) {
            req.httpRequest.on('data', function (buffer) {
                content += buffer.toString();
            });
            req.httpRequest.on('end', function () {
                console.log(content);
            });
        }
    };
    __decorate([
        http_1.Http.MiddleWare({ app: applications_1.API }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [request_1.Request]),
        __metadata("design:returntype", void 0)
    ], MiddleWares.prototype, "bodyParser", null);
    return MiddleWares;
}());
exports.MiddleWares = MiddleWares;
