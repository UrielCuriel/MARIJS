"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Request = /** @class */ (function () {
    function Request(httpRequest) {
        var _a;
        this.httpRequest = httpRequest;
        this.params = {};
        this.query = {};
        this.headers = this.httpRequest ? this.httpRequest.headers : {};
        this.method = this.headers[":method"];
        _a = this.parsePath(this.headers[":path"]), this.path = _a[0], this.query = _a[1];
        this.cookies = this.parseCookes(this.headers["cookie"]);
    }
    /**
     * parse string to cookies object
     * @param cookies cookie String from Http2ServerRequest
     */
    Request.prototype.parseCookes = function (cookies) {
        var _cookies = {};
        cookies
            ? cookies.split(";").forEach(function (_cookie) {
                var _a = _cookie.split("="), name = _a[0], value = _a[1];
                _cookies[name.trim()] = value;
            })
            : null;
        return _cookies;
    };
    /**
     * parse path to [path:string,queryParams:{}]
     * @param path :path String from Http2ServerRequest
     */
    Request.prototype.parsePath = function (path) {
        var _a = path ? path.split("?") : ["", ""], _path = _a[0], _query = _a[1];
        var querys = {};
        if (_query) {
            _query.split("&").forEach(function (_q) {
                if (_q.includes("=")) {
                    var _a = _q.split("="), name = _a[0], value = _a[1];
                    querys[name.trim()] = value;
                }
                else {
                    querys[_q] = true;
                }
            });
        }
        return [_path, querys];
    };
    return Request;
}());
exports.Request = Request;
