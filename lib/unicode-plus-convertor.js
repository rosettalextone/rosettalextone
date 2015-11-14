"use strict";

import { Type } from "./symbols/lex_types_map";

import { NormalChars } from "./symbols/codes/normal";

import { RoundedChars } from "./symbols/codes/rounded";
import { GreekChars } from "./symbols/codes/greek";

import { WestNormalChars } from "./symbols/codes/westnormal";

import { SmallChars } from "./symbols/codes/small";
import { GothicChars } from "./symbols/codes/gothic";

// Несуществующий символ 
const NON_EXIST = 0xF000;

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
    return lexArray.map(processChunk(oldChunk));
}

export function processChunk(oldChunk) {
    let newChunk;

    newChunk.underline = oldChunk.underline;
    newChunk.type = oldChunk.type;

    let dictionary = detectChars(newChunk.type);

    newChunk.symbols = oldChunk.symbols.map(processSymbol(symbol));

    return newChunk;
}

export function processSymbol(symbol) {
    let newSymbol;

    if (dictionary.has(symbol)) {
        newSymbol = dictionary.get(symbol);
    } else {
        newSymbol = NON_EXIST;
    }

    return newSymbol;
}

export function detectChars(type) {
    let result;

    switch(type) {
        case "Normal":
        case "Italic":
        case "Bold":
        case "ItalicBold":
        case "Sub":
        case "Sup":
            result = NormalChars;
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