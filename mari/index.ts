import * as fs  from 'fs';
import * as http2  from 'http2';
import { Http } from "./http/http";

const handler =new  Http();

const server = http2.createSecureServer({
    key: fs.readFileSync('localhost-privkey.pem'),
    cert: fs.readFileSync('localhost-cert.pem'),
    allowHTTP1:true,
  },handler.watch);

  server.listen(8443,'0.0.0.0',(res:any)=>{
    console.log(res);
    console.log(`listen on: https://localhost:8443`);
    
  });