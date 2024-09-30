import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { log } from 'node:console';
const userInput = readline.createInterface({input, output});

let maand = (await userInput.question("kies een maand "))

switch(maand){

    case 'Januari':
    console.log("in januari zijn er 31 dagen")
    break;

    case 'Februari':
    console.log("in februari zijn er 28 of 29 dagen")
    break;

    case 'Maart':
    console.log("in maart zijn er 31 dagen")
    break;

    case 'April':
    console.log("in april zijn er 30 dagen")
    break;

    case 'Mei':
    console.log("in mei zijn er 31 dagen")
    break;

    case 'Juni':
    console.log("in juni zijn er 30 dagen")
    break;

    case 'Juli':
    console.log("in juli zijn er 31 dagen")
    break;

    case 'Augustus':
    console.log("in augustus zijn er 31 dagen")
    break;

    case 'September':
    console.log("in september zijn er 30 dagen")
    break;

    case 'Oktober':
    console.log("in oktober zijn er 31 dagen")
    break;

    case 'November':
    console.log("in november zijn er 30 dagen")
    break;

    case 'December':

    default :

    console.log("in januari zijn er 31 dagen")
    break;


    }

process.exit()