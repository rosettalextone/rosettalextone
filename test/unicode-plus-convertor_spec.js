import { expect } from 'chai';

import { SymbolType } from "../lib/symbols/control";

import { 
    detectChars, 
    processSymbol, 
    processChunk,
    process
} from '../lib/unicode-plus-convertor';

describe('Check unicode+ convertor', () => {
    let types = [
        "Normal",
        "Italic",
        "Bold",
        "ItalicBold",
        "Sub",
        "Sup",
        "Rounded",
        "Greek",
        "WestNormal",
        "WestItalic",
        "WestBold",
        "WestItalicBold",
        "Small",
        "Gothic"
    ];

    describe('#detectChars()', () => {
        (()=>{
            types.map((type => {
                it('returns instance of "Map", when param is "' + type + '"', () => {
                    let value = detectChars(type);
                    expect(value).not.to.be.an('undefined');
                    expect(value).to.be.an.instanceof(Map);
                });
            }));
        })();

        it('throw error on incorrect string', () => {
            let value = detectChars.bind("Incorrect type");
            expect(value).to.throw(Error);
        });
    });

    describe('#processSymbol()', () => {
        describe('must return not NON_EXIST when param is number between 0x00 and 0xFF', () => {
            it("just one symbol in first dictionary 'SPACE' should return 0x20", () => {
                let dictionary = detectChars(types[0]);
                let value = processSymbol(dictionary, 0x20);

                expect(value).to.be.a('number');
                expect(value).to.equal(0x20);
            });

            // (()=>{
            //     types.map((type) => {
            //         let dictionary = detectChars(type);

            //         Array(0xFF).fill().map((_, i) => i + 1).map((i) => {
            //             it(i + ' of ' + type + ' return correct number', () => {
            //                 let value = processSymbol(dictionary, i);
            //                 expect(value).to.be.a('number');
            //                 // expect(value).to.not.equal(SymbolType.NotExist);
            //             });
            //         });
            //     });
            // })();
        });
    });

    describe('#processChunk()', () => {

    });

    describe('#process()', () => {

    });
});