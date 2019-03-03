/// <reference types="node" />
import { Http2ServerRequest, Http2ServerResponse } from 'http2';
export declare namespace Http {
    let MIDDLEWARES: any[];
    class Application {
        middleWares: any[];
        Routes: never[];
        constructor();
        loadMiddlewares(): void;
        watch(req: Http2ServerRequest, res: Http2ServerResponse): void;
        init(serverOptions: serverOptions): void;
        addMiddleWare(middleWare: any): void;
    }
    function MiddleWare(options?: middleWareOptions): (target: any, key: any, descriptor: any) => void;
    interface middleWareOptions {
        app?: Application;
    }
    interface serverOptions {
        port?: number;
        host?: string;
    }
}
