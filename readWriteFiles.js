// process.on("uncaughtException", (err) => { //use when we don't expect and error, the last deffender
//     console.log("Uncaugh Error");
//     process.exit(1);
// });


import {readFile, appendFile, unlink, rename, writeFile} from 'fs/promises';
import path from "path";
import { fileURLToPath } from 'url';

const __fileName = fileURLToPath(import.meta.url);
const __direName = path.dirname(__fileName);
try{
    const data = await readFile(path.join(__direName, "files", "students"),"utf8");
    console.log(data);
    // await appendFile(path.join());
    // const newFile = await readFile("/Users/youcefdabouz/Desktop/MyInfo/Web/NodeJs/files/newFile", "utf8");
    // console.log(newFile);
    // await rename("/Users/youcefdabouz/Desktop/MyInfo/Web/NodeJs/files/newFile", "newName");
    // await unlink("/Users/youcefdabouz/Desktop/MyInfo/Web/NodeJs/files/newFile");
}catch(err){
    console.log(err.message);
}


//On ES Modules, there is no "__fileName" and "__dirname" so you have to create it with "path" and "fileURLToPath"
//Use path.join to create your path, because there is some OS supporte "/" and others "\"
//appenfile use if you want add contenet wihtout deleting the old
//writeFile for deleting the old and add new
//process is the last defender, like if you forgot handle an error, you have handle it an close your App