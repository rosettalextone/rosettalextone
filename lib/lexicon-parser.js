"use strict";

import { Type } from "./symbols/lex_types";
import { Control } from "./symbols/control";

// Обрабатываем записанные байты и создаем специальную 
// структуру для хранения данных
// {
//     [
//          {
//              underline: bool,
//              type: Symbol.Type,
//              symbols: [byte1, byte2, ... , byten]
//          }
//     ], ...
// }   
export function process(byteArray) {
    let result = [];

    let position = 0;
    let offset = 0;

    for (let i = position; i < byteArray.length; i++) {
        if (byteArray[i] == Control.CR) {
            position = i;

            let line = byteArray.slice(offset, position);
            let buffer = parseString(line);

            result.push(...buffer);

            offset = position;

        } else if (byteArray[i] == Control.LF) {
            offset += 1;
        }
    };

    return result;
}

function parseString(line) {

    throw new Error("Function is not implemented");
    
    // let result = [];

    // for (let i = 0; i < line.length; i++) {

    // }

    // return result;
}