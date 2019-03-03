import { Http2ServerRequest, Http2ServerResponse } from 'http2';
import * as http2 from 'http2';
import * as fs from 'fs';
import { Request } from './request';


export namespace Http {
    export let MIDDLEWARES: any[] = [];
    export class Application {
        middleWares: any[] = [];
        Routes = [];
        constructor() {
            this.loadMiddlewares();
        }
        loadMiddlewares() {
            MIDDLEWARES.forEach(_m => {
                this.middleWares.indexOf(_m) != -1 ? this.middleWares.push(_m) : null;
            })

        }


        watch(req: Http2ServerRequest, res: Http2ServerResponse) {
            let _req = new Request(req);
            this.middleWares.forEach((_m) => {
                console.log(_m);

                _m(_req, res);
            });
        }

        init(serverOptions: serverOptions) {
            const server = http2.createSecureServer({
                key: fs.readFileSync('localhost-privkey.pem'),
                cert: fs.readFileSync('localhost-cert.pem'),
                allowHTTP1: true,
            });

            server.on('request', (req, res) => {
                this.watch(req, res);
            });

            server.listen(serverOptions.port, serverOptions.host, (res: any) => {
                console.log(res);
                console.log(`listen on: https://localhost:8443`);

            });
        }
        addMiddleWare(middleWare: any) {
            console.log(middleWare[0]);
            this.middleWares.push(middleWare);
            console.log(this.middleWares);
        }
    }

    export function MiddleWare(options?: middleWareOptions) {
        return function (target: any, key: any, descriptor: any) {
            options ?
                options.app ? options.app.addMiddleWare(target[key])
                    : MIDDLEWARES.push(target[key])
                : MIDDLEWARES.push(target[key]);
        }
    }

    export interface middleWareOptions {
        app?: Application
    }
    export interface serverOptions {
        port?: number,
        host?: string,
    }
}

