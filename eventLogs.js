//date(yyyy-mm-dd hh-mm-ss), id,
// => on new folder and new file => mkdir + appenedFile(old + new!)

import { format } from "date-fns";
import { fileURLToPath } from "url";
import { appendFile, mkdir } from "fs/promises";
import path from "path";
import {v4} from "uuid";


async function logEvent(message, fileName){
    const logDate = format(new Date(), "yyyy/mm/dd\t hh:mm:ss"); //creating date
    const __fileName = fileURLToPath(import.meta.url); //getting file locaiton
    const __mkfirName = path.dirname(__fileName); //getting directory location
    const ourPath = path.join(__mkfirName, "info")//creat the path
    let id = v4(); // creat the ID
    let content = `${logDate}\t${id}\t${message}\n`; //creat the content

    try{
        await mkdir(ourPath, { recursive: true }); //creat directory if any
        await appendFile(path.join(ourPath, fileName), content); // creat file
    }catch(err){
        console.log(err.message);
    }
}

export{logEvent};