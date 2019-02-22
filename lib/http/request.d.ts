/// <reference types="node" />
import { Http2ServerRequest } from "http2";
export declare class Request {
    private httpRequest;
    private headers;
    method: string | undefined;
    path: string | undefined;
    cookies: {};
    params: {};
    query: {};
    constructor(httpRequest: Http2ServerRequest);
    /**
     * parse string to cookies object
     * @param cookies cookie String from Http2ServerRequest
     */
    private parseCookes;
    /**
     * parse path to [path:string,queryParams:{}]
     * @param path :path String from Http2ServerRequest
     */
    private parsePath;
}
