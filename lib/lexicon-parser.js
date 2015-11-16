import { TypeMap, Type } from "./symbols/lex_types_map";
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

export default class LexiconParser {
    static process(byteArray) {
        return LexiconParser.divideByLines(byteArray)
                .map(line => LexiconParser.divideByTrigger(line))
                .map(line => LexiconParser.parseLine(line));
    }

    static parseLine(line) {
        const result = line.reduce((acc, section) => {
            const type = section[0];
            const bytes = section.slice(1);

            if (!TypeMap.has(type)) {
                console.error('Unknown symbol after control term!');
                return acc;
            }

            const parsedType = TypeMap.get(type);

            switch(TypeMap.get(type)) {
                case 'Underline':
                    acc.underline = true;
                    break;
                case 'DisableUnderline':
                    acc.underline = false;
                    break;
                default:
                    acc.type = parsedType;
            }

            let chunk = LexiconParser.makeChunk(acc.underlined, acc.type);
            acc.chunks.push = chunk.symbols.concat(bytes);

            return acc;
        }, {type: Type.Normal, underlined: false, chunks: []});

        return result.chunks;
    }

    static divideByTrigger(line) {
        if (line.length === 0) {
            return [];
        }

        return line.reduce((chunks, byte) => {
            switch(byte) {
                case Control.Trigger:
                    return chunks.concat([]);
                default:
                    return chunks[chunks.length - 1].push(byte);
            }
        }, [[]]);
    }

    static divideByLines(byteArray) {
        if (byteArray.length === 0) {
            return [];
        }

        return byteArray.reduce((lines, byte) => {
            switch(byte) {
                case Control.CR:
                    break;
                case Control.LF:
                    lines.push([]);
                    break;
                default:
                    lines[lines.length - 1].push(byte);
                    break;
            }
            return lines;
        }, [[]]);
    }

    static makeChunk(underlined, type) {
        return {
            underlined: underlined,
            type: type,
            symbols: []
        };
    }
}
