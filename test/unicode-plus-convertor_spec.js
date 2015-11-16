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
        types.map((type => {
            it(`returns instance of "Map", when param is "${type}"`, () => {
                let value = detectChars(type);
                expect(value).not.to.be.an('undefined');
                expect(value).to.be.an.instanceof(Map);
            });
        }));

        it('throw error on incorrect string', () => {
            let value = detectChars.bind("Incorrect type");
            expect(value).to.throw(Error);
        });
    });

    describe('#processSymbol()', () => {
        it("returns just one symbol in first dictionary 'SPACE' should return 0x20", () => {
            let dictionary = detectChars(types[0]);
            let value = processSymbol(dictionary, 0x20);

            expect(value).to.be.a('number');
            expect(value).to.equal(0x20);
        });

        // describe.skip('check the return not SymbolType.NotExist when param is number between 0x00 and 0xFF', () => {
            
        //     let numArray = Array
        //         .apply(null, Array(0xFF))
        //         .map((_, i) => i + 1);


        //     types.map((type) => {
        //         let dictionary = detectChars(type);

        //         numArray.map((i) => {
        //             it(`0x${i.toString(16)} of ${type} returns correct number`, () => {
        //                 let value = processSymbol(dictionary, i);
        //                 expect(value).to.be.a('number');
        //                 expect(value).to.not.equal(SymbolType.NotExist);
        //             });
        //         });
        //     });

        // });
    });

    describe('#processChunk()', () => {
        it("throw error on empty object", () => {
            let value = processChunk.bind(undefined);
            expect(value).to.throw(Error);
        });

        it("throw error on incorrect object", () => {
            let value = processChunk.bind({});
            expect(value).to.throw(Error);
        });

        it("should return correct chunk with one symbol", () => {
            let chunk = {
                underline: false,
                type: types[0],
                symbols: [0x20]
            };

            let value = processChunk(chunk);
            expect(value).not.to.be.an('undefined');
            expect(value).to.deep.equal(chunk);
        });
    });

    describe('#process()', () => {
        it("throw error on empty object", () => {
            let value = process.bind(undefined);
            expect(value).to.throw(Error);
        });

        it("throw error on incorrect object", () => {
            let value = process.bind({});
            expect(value).to.throw(Error);
        });

        it("should return correct array with several chunks", () => {
            let chunk = {
                underline: false,
                type: types[0],
                symbols: [0x20, 0x20, 0x20]
            };

            let array = [];
            array.push(chunk);
            array.push(chunk);
            array.push(chunk);

            let value = process(array);
            expect(value).not.to.be.an('undefined');
            expect(value).to.deep.equal(array);
        });
    });
});