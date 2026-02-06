import http from 'http';
import path from 'path';
import {fileURLToPath} from 'url';
import {existsSync} from 'fs';
import {readFile, appendFile, mkdir} from 'fs/promises';
import {EventEmitter} from 'events';
import {logEvent} from "./eventLogs.js";

const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

class eventListener extends EventEmitter{};
const listener = new eventListener();

listener.on("GET",  (message, fileName) => logEvent(message, fileName));

let returnData = async function(filePath, contentType, response){//responce function
        try{
            let data = await readFile(filePath,
                    !contentType.includes("image") ? "utf8" : ""
                );//Get Data
            let dataConv = contentType === "application/json" ? JSON.parse(data) : data
            response.writeHead(
                filePath.includes("404.html") ? 404 : 200, //Check Error If any
                {"Content-Type": contentType});
            response.end(
                contentType === "application/json" ? JSON.stringify(dataConv) : dataConv
            ); //Send Responce
        }catch(err){
            response.statusCode = 500;
            listener.emit("GET", `${err}: ${err.message}`, "errLogs.txt"); //Listent To Error
            response.end();
        }
    }

const server = http.createServer((req, res) => {
    listener.emit("GET", `${req.url}\t${req.method}`, "reqLog.txt"); //Regester Requests
    
    const extention = path.extname(req.url); //Get Extention
    let contentType;

    switch (extention) {
    case '.css':
        contentType = 'text/css';
        break;
    case '.js':
        contentType = 'text/javascript';
        break;
    case '.json':
        contentType = 'application/json';
        break;
    case '.png':
        contentType = 'image/png';
        break;
    case '.jpg':
    case '.jpeg':
        contentType = 'image/jpeg';
        break;
    case '.gif':
        contentType = 'image/gif';
        break;
    case '.svg':
        contentType = 'image/svg+xml';
        break;
    case '.pdf':
        contentType = 'application/pdf';
        break;
    case '.xml':
        contentType = 'application/xml';
        break;
    case '.txt':
        contentType = 'text/plain';
        break;
    default:
      contentType = 'text/html'; // default for HTML views
  }

  // localhost:3500/ ==> path + views + index.html
  // localhost:3500/../../ ==> path + view + url
  // localhost:3500/main(.HTML) // localhost:3500/../../main(.HTML) ==> path + view + url
  // localhost:3500/some.JSON ==> 

  let filePath =
    (contentType === "text/html" && req.url === "/")
    ? path.join(__dirname, "views", "index.html")
    : (contentType === "text/html" && req.url.slice(-1) === "/")
    ? path.join(__dirname, "views", req.url)
    : (contentType === "text/html")
    ? path.join(__dirname, "views" ,req.url)
    : path.join(__dirname, req.url);

    if(!extention && contentType == "text/html" && req.url.slice(-1) != "/"){
        filePath += ".html";
    }
    

    if(existsSync(filePath)){
        returnData(filePath, contentType, res);
    }else{
        //name(file name)
        //base(file name and extention)
        //ext(extention JS, HTML...)
        switch(path.parse(filePath).base){ //Forwarding Request
            case "oldPage.html":
                res.writeHead(301, {"Location": "newPage.html"});
                res.end();
                break;
            case "main.html":
                res.writeHead(301, {"Location": "/"});
                res.end();
                break;
            default:
                returnData(path.join(__dirname, "views", "404.html"), "text/HTML", res);
        }
    }

});

const port = process.env.port ?? 3500;

server.listen(port, () => {
    console.log(`Listenning From ${port}`);
})