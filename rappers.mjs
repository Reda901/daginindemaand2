import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { log } from 'node:console';
const userInput = readline.createInterface({input, output});

let artist = (await userInput.question("kies een artist   "))

switch(artist){

case " Tupac":
console.log("Al eyes on me") 
break;

case "lacrim":
console.log("plata") 
break;

case "SCH":
console.log("la nuit") 
break;

case "SDM":

console.log("ocho") 
break;

default:


}

process.exit()
