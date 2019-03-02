import { Http2ServerRequest } from "http2";
export class Request {
  private headers: import("http2").IncomingHttpHeaders;
  method: string | undefined;
  path: string | undefined;
  cookies: {};
  params = {};
  query = {};
  constructor(private httpRequest: Http2ServerRequest) {
    this.headers = this.httpRequest.headers;
    this.method = this.headers[":method"];
    [this.path, this.query] = this.parsePath(this.headers[":path"]);
    this.cookies = this.parseCookes(this.headers["cookie"]);
    // console.log(this.httpRequest);
    
    httpRequest.on('data',(data:Buffer)=>{
      console.log(data.toString());      
    });
  }
  /**
   * parse string to cookies object
   * @param cookies cookie String from Http2ServerRequest
   */
  private parseCookes(cookies: string | undefined): {} {
    const _cookies: any = {};
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
  private parsePath(path: string | undefined): [string, {}] {
    const [_path, _query] = path ? path.split("?") : ["", ""];
    let querys: any = {};
    if (_query) {
      _query.split("&").forEach(_q => {
        if (_q.includes("=")) {
          const [name, value] = _q.split("=");
          querys[name.trim()] = value;
        } else {
          querys[_q] = true;
        }
      });
    }
    return [_path, querys];
  }
}
