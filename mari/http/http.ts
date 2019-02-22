import { Request } from './request';
import { Http2ServerRequest, Http2ServerResponse } from "http2";




export class Http {
    private middleWares=[];
    private getFuncs=[];
    private postFunc=[];
    
    constructor() {
        
    }
    watch(req:Http2ServerRequest, res: Http2ServerResponse){
        const _req = new Request(req);
        console.log(_req);
        
        res.end();
    }
}
