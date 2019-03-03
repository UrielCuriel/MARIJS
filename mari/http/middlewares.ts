import { Http } from "./http";
import { Request } from "./request";
import { API } from "../applications";
import { Http2ServerRequest } from "http2";


export class MiddleWares {
    constructor() {
    }
    @Http.MiddleWare({ app: API })
    bodyParser(req: Request) {
        console.log('bodyPaser');

        const type = req.headers["content-type"];
        let content: string = '';
        if (req.httpRequest) {
            req.httpRequest.on('data', (buffer: Buffer) => {
                content += buffer.toString();
            });
            req.httpRequest.on('end', () => {
                console.log(content);

            });
        }
    }
}


