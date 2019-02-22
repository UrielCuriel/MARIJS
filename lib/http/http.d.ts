/// <reference types="node" />
import { Http2ServerRequest, Http2ServerResponse } from "http2";
export declare class Http {
    private middleWares;
    private getFuncs;
    private postFunc;
    constructor();
    watch(req: Http2ServerRequest, res: Http2ServerResponse): void;
}
