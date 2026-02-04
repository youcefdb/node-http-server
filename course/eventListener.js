import EventEmitter from "events";
import { logEvent } from "./eventListenerMethods.js";

class custEvent extends EventEmitter{}; //custom listener

const ev = new custEvent();

ev.on("log", async () => { //creat the listener
    await logEvent();
});
////test
ev.emit("log"); //hearing.. when you enter "log", the ev.on will execute 