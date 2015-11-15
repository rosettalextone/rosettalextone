import { expect } from 'chai';

import { Control } from "./../lib/symbols/control";

import { 
    makeChunk, 
    parseString,
    process
} from '../lib/lexicon-parser';

describe('Check lexicon parser', () => {
    describe('#makeChunk()', () => {
        it('should throw error with empty params', () => {
            let value = makeChunk.bind(undefined, undefined);
            expect(value).to.throw(Error);
        });

        it('should return object with correct fields', () => {
            let value = makeChunk(true, "Some Text");

            expect(value).to.be.an('object');
            expect(value.underlined).to.be.a('boolean');
            expect(value.type).to.be.a('string');
            expect(value.symbols).to.be.an('array');
        });

        it('should return right object', () => {
            let value = makeChunk(true, "Some Text");

            expect(value.underlined).to.equal(true);
            expect(value.type).to.equal("Some Text");
            expect(value.symbols).to.be.an('array');
            expect(value.symbols.length).to.equal(0);
        });
    });

    describe('#parseString()', () => {
        it('should throw error with empty params', () => {
            let value = parseString.bind(undefined);
            expect(value).to.throw(Error);
        });

        it('should return array', () => {
            let byteArray = new Buffer("I'm a buffer");
            let value = parseString(byteArray);

            expect(value).to.be.an('array');
        });

        it('should return array of specific objects', () => {
            let byteArray = new Buffer("I'm a buffer");
            let value = parseString(byteArray);

            value.map((item) => {
                expect(item).to.be.an('object');
                expect(item.underlined).to.be.a('boolean');
                expect(item.type).to.be.a('string');
                expect(item.symbols).to.be.an('array');
            });
        });
    });

    describe('#process()', () => {
        it('should throw error with empty params', () => {
            let value = process.bind(undefined);
            expect(value).to.throw(Error);
        });

        it('should return array', () => {
            let byteArray = new Buffer("I'm a buffer\nAnd I have some\nlines", "ascii");
            let value = process(byteArray);

            expect(value).to.be.an('array');
        });

        it('should return array with specific lenght', () => {
            let byteArray = new Buffer("I'm a buffer\nAnd I have some\nlines", "ascii");
            let value = process(byteArray);

            expect(value.length).to.equal(3);
        });

        it('should return array of specific objects', () => {
            let byteArray = new Buffer("I'm a buffer\nAnd I have some\nlines", "ascii");
            let value = process(byteArray);

            value.map((item) => {
                expect(item).to.be.an('object');
                expect(item.underlined).to.be.a('boolean');
                expect(item.type).to.be.a('string');
                expect(item.symbols).to.be.an('array');
            });
        });

        it('should return correct array of specific objects (with CL+LF)', () => {
            let byteArray = new Buffer([0x20, 0x20, Control.CL, Control.FL, 0x20, 0x20]);
            let value = process(byteArray);

            expect(value.length).to.equal(2);

            expect(value[0].underlined).to.equal(false);
            expect(value[0].type).to.equal("Normal");
            expect(value[0].symbols[0]).to.equal(0x20);
            expect(value[0].symbols[1]).to.equal(0x20);

            expect(value[1].underlined).to.equal(false);
            expect(value[1].type).to.equal("Normal");
            expect(value[1].symbols[0]).to.equal(0x20);
            expect(value[1].symbols[1]).to.equal(0x20);
        });

        it('should return correct array of specific objects (with CL)', () => {
            let byteArray = new Buffer([0x20, 0x20, Control.CL, 0x20, 0x20]);
            let value = process(byteArray);

            expect(value.length).to.equal(2);

            expect(value[0].underlined).to.equal(false);
            expect(value[0].type).to.equal("Normal");
            expect(value[0].symbols[0]).to.equal(0x20);
            expect(value[0].symbols[1]).to.equal(0x20);

            expect(value[1].underlined).to.equal(false);
            expect(value[1].type).to.equal("Normal");
            expect(value[1].symbols[0]).to.equal(0x20);
            expect(value[1].symbols[1]).to.equal(0x20);
        });

        it('should return correct array of specific objects (with LF)', () => {
            let byteArray = new Buffer([0x20, 0x20, Control.LF, 0x20, 0x20]);
            let value = process(byteArray);

            expect(value.length).to.equal(2);

            expect(value[0].underlined).to.equal(false);
            expect(value[0].type).to.equal("Normal");
            expect(value[0].symbols[0]).to.equal(0x20);
            expect(value[0].symbols[1]).to.equal(0x20);

            expect(value[1].underlined).to.equal(false);
            expect(value[1].type).to.equal("Normal");
            expect(value[1].symbols[0]).to.equal(0x20);
            expect(value[1].symbols[1]).to.equal(0x20);
        });
    });
});