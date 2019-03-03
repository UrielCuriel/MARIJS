import { MiddleWares } from "./http/middlewares";
import { API } from "./applications";

class Mari {
    middlewares: MiddleWares;
    constructor() {
        this.middlewares = new MiddleWares();
        API.init({ port: 8443, host: '0.0.0.0' })
    }
}

let mari = new Mari();
