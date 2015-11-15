import { Type, TypeMap } from "./symbols/lex_types_map";
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

    // let position = 0;
    // let offset = 0;

    let buffer = [];
    byteArray.map((byte, index, array) => {
        if (index == array.length - 1) {
            if (buffer.length != 0) {
                result.push(...(parseString(buffer)));
                buffer = [];   
            }
        } else if (byte == Control.CR) {
            if (buffer.length != 0) {
                result.push(...(parseString(buffer)));
                buffer = [];
            }
        } else if (byte == Control.LF) {
            if (buffer.length != 0) {
                result.push(...(parseString(buffer)));
                buffer = [];
            }
        } else {
            buffer.push(byte);
        }
    });

    // for (let i = position; i < byteArray.length; i++) {
    //     if (byteArray[i] == Control.LF || i == byteArray.length - 1) {
    //         position = i;

    //         let line = byteArray.slice(offset + 1, position);
    //         // console.log("Line length: " + line);

    //         let buffer = parseString(line);

    //         result.push(...buffer);

    //         offset = position;

    //     } else if (byteArray[i] == Control.CR) {
    //         offset += 1;
    //     }
    // };

    return result;
}

export function parseString(line) {
    if (typeof line == 'undefined')
        throw new Error("Lexicon parser: incorrect params in parseString");

    let result = [];
    let currentChunk = makeChunk(false, TypeMap.get(Type.Normal));

    let trigger = false;
    let underlined = false;

    for (let i = 0; i < line.length; i++) {
        if (line[i] == Control.Trigger) {
            // console.log("Found trigger: " + line[i]);
            trigger = true;
        } else if (trigger) {
            // console.log("Next to trigger: " + line[i]);
            trigger = false;

            let newChunk;

            if (TypeMap.has(line[i])) {

                if (TypeMap.get(line[i]) == "Underline") {
                    underlined = true;
                    newChunk = makeChunk(underlined, currentChunk.type);
                } else if (TypeMap.get(line[i]) == "DisableUnderline") {
                    underlined = false;
                    newChunk = makeChunk(underlined, currentChunk.type);
                } else {
                    newChunk = makeChunk(underlined, TypeMap.get(line[i]));
                }

            } else {
                throw new Error("Lexicon parser: Unknown symbol after control term parseString");
            }

            result.push(currentChunk);
            currentChunk = newChunk;

        } else {
            // console.log("Just symbol: " + line[i]);
            currentChunk.symbols.push(line[i]);
        }
    }

    result.push(currentChunk);

    return result;
}

export function makeChunk(underlined, type) {
    if (typeof underlined == 'undefined' ||
        typeof type == 'undefined')
        throw new Error(`Lexicon parser: incorrect params in makeChunk(${underlined}, ${type})`);

    let chunk = {
        underlined: underlined,
        type: type,
        symbols: []
    }

    return chunk;
}