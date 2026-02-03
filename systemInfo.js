// // import {mul} from "/Users/youcefdabouz/Desktop/MyInfo/Web/NodeJs/math.js";
// // let a = 1;
// // let b = 2;
// // console.log(mul(a, b));

import path, { dirname } from "path";
import { fileURLToPath } from "url";
import os from "os";

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

//you can know info of you system by os
//you can import an module by import {funcs} from "modulePath"
//on module add export on the spesific fun or var, or export all by: export {...}