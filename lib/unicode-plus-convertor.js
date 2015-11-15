import { SymbolType } from "./symbols/control";
import { Type } from "./symbols/lex_types_map";

import { NormalChars } from "./symbols/codes/normal";

import { ItalicChars } from "./symbols/codes/italic";
import { BoldChars } from "./symbols/codes/bold";
import { ItalicBoldChars } from "./symbols/codes/italic-bold";

import { SubChars } from "./symbols/codes/sub";
import { SupChars } from "./symbols/codes/sup";

import { RoundedChars } from "./symbols/codes/rounded";
import { GreekChars } from "./symbols/codes/greek";

import { WestNormalChars } from "./symbols/codes/westnormal";

import { SmallChars } from "./symbols/codes/small";
import { GothicChars } from "./symbols/codes/gothic";


// Обрабатываем записанную структуру меняя символы Лексикона 
// на символы Юникода или доп. символы (которые отсутствуют в Юникоде)
// {
//     [
//          {
//              underline: bool,
//              type: Symbol.Type,
//              symbols: [byte1, byte2, ... , byten]
//          }
//     ], ...
// }  
// становится:
// {
//     [
//          {
//              underline: bool,
//              type: Symbol.Type,
//              symbols: [[unicode|non-unicode], [unicode|non-unicode], ... , [unicode|non-unicode]]
//          }
//     ], ...
// }  
export function process(lexArray) {
    return lexArray.map((chunk) => processChunk(chunk));
}

export function processChunk(oldChunk) {
    let newChunk = {};

    if (typeof oldChunk == 'undefined')
        throw new Error("Unicode process: processChunk recieved undefined");
    
    if (Object.keys(oldChunk).length == 0)
        throw new Error("Unicode process: processChunk recieved empty chunk");

    newChunk.underline = oldChunk.underline;
    newChunk.type = oldChunk.type;

    let dictionary = detectChars(newChunk.type);

    newChunk.symbols = [];
    newChunk.symbols = oldChunk.symbols.map((symbol) => 
        processSymbol(dictionary, symbol));

    return newChunk;
}

export function processSymbol(dictionary, symbol) {
    let newSymbol;

    if (dictionary.has(symbol)) {
        newSymbol = dictionary.get(symbol);
    } else {
        newSymbol = SymbolType.NotExist;
    }

    return newSymbol;
}

export function detectChars(type) {
    let result;

    switch(type) {
        case "Normal":
            result = NormalChars;
            break;
        case "Italic":
            result = ItalicChars;
            break;
        case "Bold":
            result = BoldChars;
            break;
        case "ItalicBold":
            result = ItalicBoldChars;
            break;
        case "Sub":
            result = SubChars;
            break;
        case "Sup":
            result = SupChars;
            break;
        case "Rounded":
            result = RoundedChars;
            break;
        case "Greek":
            result = GreekChars;
            break;
        case "WestNormal":
        case "WestItalic":
        case "WestBold":
        case "WestItalicBold":
            result = WestNormalChars;
            break;
        case "Small":
            result = SmallChars;
            break;  
        case "Gothic":
            result = GothicChars;
            break;
        default:
            throw new Error("Unicode process: Unexpected chunk type!");
    }

    return result;
}