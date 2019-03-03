/// <reference types="node" />
import { Http2ServerRequest, IncomingHttpHeaders } from 'http2';
export declare class Request {
    httpRequest?: Http2ServerRequest | undefined;
    headers: IncomingHttpHeaders;
    method: string | undefined;
    path: string | undefined;
    cookies: {};
    params: {};
    query: {};
    body: any;
    constructor(httpRequest?: Http2ServerRequest | undefined);
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
