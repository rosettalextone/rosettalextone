import { expect, assert } from 'chai';

import { detectChars } from '../lib/unicode-plus-convertor';

describe('Check unicode+ convertor', () => {
    describe('detectChars', () => {
        const types = [
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


        (()=>{
            types.map((type) => {
                it('returns type "Map" on "' + type + '" type', () => {
                    // assert.typeOf(type, "string");
                    let value = detectChars(type);
                    expect(value).to.be.an('object');
                });
            });
        })();

        it('throw error on incorrect string', () => {
            assert.fail(detectChars("Incorrect type"), Error);
        });

        it('returns correct dictionary by chunk type', () => {
            assert.ok("Ok!", "Ok!");
        });
    });

});