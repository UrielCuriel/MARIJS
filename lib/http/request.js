"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Request {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
        this.params = {};
        this.query = {};
        this.headers = this.httpRequest.headers;
        this.method = this.headers[":method"];
        [this.path, this.query] = this.parsePath(this.headers[":path"]);
        this.cookies = this.parseCookes(this.headers["cookie"]);
    }
    /**
     * parse string to cookies object
     * @param cookies cookie String from Http2ServerRequest
     */
    parseCookes(cookies) {
        const _cookies = {};
        cookies
            ? cookies.split(";").forEach(_cookie => {
                const [name, value] = _cookie.split("=");
                _cookies[name.trim()] = value;
            })
            : null;
        return _cookies;
    }
    /**
     * parse path to [path:string,queryParams:{}]
     * @param path :path String from Http2ServerRequest
     */
    parsePath(path) {
        const [_path, _query] = path ? path.split("?") : ["", ""];
        let querys = {};
        if (_query) {
            _query.split("&").forEach(_q => {
                if (_q.includes("=")) {
                    const [name, value] = _q.split("=");
                    querys[name.trim()] = value;
                }
                else {
                    querys[_q] = true;
                }
            });
        }
        return [_path, querys];
    }
}
exports.Request = Request;
