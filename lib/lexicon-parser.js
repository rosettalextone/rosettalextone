import { Type } from "./symbols/lex_types_map";
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

            let line = byteArray.slice(offset + 1, position);
            console.log("Line length: " + line);

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
    let result = [];
    let currentChunk = makeChunk(false, Type.Normal);

    let trigger = false;
    let underlined = false;

    for (let i = 0; i < line.length; i++) {
        if (line[i] == Control.Trigger) {
            console.log("Found trigger: " + line[i]);
            trigger = true;
        } else if (trigger) {
            console.log("Next to trigger: " + line[i]);
            trigger = false;

            let newChunk;

            if (Type.has(line[i])) {

                if (Type.get(line[i]) == "Underline") {
                    underlined = true;
                    newChunk = makeChunk(underlined, currentChunk.type);
                } else if (Type.get(line[i]) == "DisableUnderline") {
                    underlined = false;
                    newChunk = makeChunk(underlined, currentChunk.type);
                } else {
                    newChunk = makeChunk(underlined, Type.get(line[i]));
                }

            } else {
                console.log("Warning: Unknown symbol after control term!");
            }

            result.push(currentChunk);
            currentChunk = newChunk;

        } else {
            console.log("Just symbol: " + line[i]);
            currentChunk.symbols.push(line[i]);
        }
    }

    result.push(currentChunk);

    return result;
}

function makeChunk(underlined, type) {
    let chunk = {
        underlined: underlined,
        type: type,
        symbols: []
    }

    return chunk;
}