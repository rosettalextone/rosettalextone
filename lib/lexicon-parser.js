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
                .map(line => LexiconParser.parseLine(line));
    }

    static parseType(typeByte) {
        const parsedType = TypeMap.get(typeByte);

        switch(parsedType) {
            case 'Underline':
                return {type: 'underline', value: true};
            case 'DisableUnderline':
                return {type: 'underline', value: false};
            case undefined:
                return {type: 'undefined', value: null}
            default:
                return {type: 'changeType', value: parsedType};
        }
    }

    static isTrigger(byte) {
        return byte === Control.Trigger;
    }

    static parseLine(line) {
        const initialAccumulator = {
            type: TypeMap.get(Type.Normal),
            trigger: false,
            underlined: false,
            shouldAddChunk: true,
            chunks: []
        };

        const result = line.reduce(function(acc, byte) {
            if (LexiconParser.isTrigger(byte)) {
                acc.trigger = true;
                return acc;
            }

            switch(acc.trigger) {
                case true:
                    acc.trigger = false;
                    let parsedType = LexiconParser.parseType(byte);

                    switch(parsedType.type) {
                        case 'underline':
                            acc.underlined = parsedType.value;
                            break;
                        case 'changeType':
                            acc.type = parsedType.value;
                            break;
                        case 'undefined':
                            console.log('Warning! Unknown byte after trigger');
                            break;
                    }

                    acc.shouldAddChunk = true;;
                    return acc;
                case false:
                    if (acc.shouldAddChunk) {
                        acc.shouldAddChunk = false;

                        const chunk = LexiconParser.makeChunk(acc.underlined, acc.type);
                        acc.chunks.push(chunk);
                    }
                    acc.chunks[acc.chunks.length - 1].symbols.push(byte);
                    return acc;
            }
        }, initialAccumulator);

        return result.chunks;
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
