import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { log } from 'node:console';
const userInput = readline.createInterface({input, output});

let maand

switch(maand){

case 'Januari':
console.log("in januari zijn er 31 dagen")
break;

case 'februari':
console.log("in februari zijn er 28 of 29 dagen")
break;

case 'maart':
console.log("in maart zijn er 31 dagen")
break;

case 'april':
console.log("in april zijn er 30 dagen")
break;

case 'mei':
console.log("in mei zijn er 31 dagen")
break;

case 'Juni':
console.log("in juni zijn er 30 dagen")
break;

case 'Juli':
console.log("in juli zijn er 31 dagen")
break;

case 'augustus':
console.log("in augustus zijn er 31 dagen")
break;

case 'september':
console.log("in september zijn er 30 dagen")
break;

case 'oktober':
console.log("in oktober zijn er 31 dagen")
break;

case 'november':
console.log("in november zijn er 30 dagen")
break;

case 'december':
console.log("in januari zijn er 31 dagen")
break;


}

process.exit()