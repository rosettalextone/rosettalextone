import { expect } from 'chai';
import { Control } from "./../lib/symbols/control";
import LexiconParser from '../lib/lexicon-parser';
import fs from 'fs';

describe('Lexicon parser', () => {
    describe('#makeChunk()', () => {

        it(`should return instance of object with keys 'underlined', 'type', \
            'symbol' correspoding with types bool, string and array`, () => {
            const chunk = LexiconParser.makeChunk(true, "Some Text");

            expect(chunk.underlined).to.equal(true);
            expect(chunk.type).to.be.a('string');
            expect(chunk.type).to.equal('Some Text');
            expect(chunk.symbols).to.be.an('array');
            expect(chunk.symbols.length).to.equal(0);
        });

    });

    describe('#divideByLines', () => {

        it('should divide an array of bytes by lines (by LF or CRLF)', () => {
            const buffer = fs.readFileSync(`${__dirname }/fixtures/testfile.txt`);
            const lines = LexiconParser.divideByLines(buffer);

            expect(lines.length).to.be.equal(62);
        });

        it('should return empty array if there is no bytes in given array', () => {
            const buffer = new Buffer(0);
            const lines = LexiconParser.divideByLines(buffer);

            expect(lines.length).to.be.equal(0);
        });

    });

    describe('#divideByTrigger', () => {
    
        it('divided lines by trigger byte', () => {
    
        });
    
    });
    
    describe('#parseLine()', () => {

        it('should return array', () => {
            let byteArray = new Buffer("I'm a buffer");
            let value = LexiconParser.parseLine(byteArray);

            expect(value).to.be.an('array');
        });

        it('should return array of specific objects', () => {
            let byteArray = new Buffer("I'm a buffer");
            let value = LexiconParser.parseLine(byteArray);

            value.map((item) => {
                expect(item).to.be.an('object');
                expect(item.underlined).to.be.a('boolean');
                expect(item.type).to.be.a('string');
                expect(item.symbols).to.be.an('array');
            });
        });
        
    });
    
    describe.skip('#process()', () => {
        it('should throw error with empty params', () => {
            let value = LexiconParser.process.bind(undefined);
            expect(value).to.throw(Error);
        });
    
        it('should return array', () => {
            let byteArray = new Buffer("I'm a buffer\nAnd I have some\nlines", "ascii");
            let value = LexiconParser.process(byteArray);
    
            expect(value).to.be.an('array');
        });
    
        it('should return array with specific lenght', () => {
            let byteArray = new Buffer("I'm a buffer\nAnd I have some\nlines", "ascii");
            let value = LexiconParser.process(byteArray);
    
            expect(value.length).to.equal(3);
        });
    
        it('should return array of specific objects', () => {
            let byteArray = new Buffer("I'm a buffer\nAnd I have some\nlines", "ascii");
            let value = LexiconParser.process(byteArray);
    
            value.map((item) => {
                expect(item).to.be.an('object');
                expect(item.underlined).to.be.a('boolean');
                expect(item.type).to.be.a('string');
                expect(item.symbols).to.be.an('array');
            });
        });
    
        it('should return correct array of specific objects (with CL+LF)', () => {
            let byteArray = new Buffer([0x20, 0x20, Control.CL, Control.FL, 0x20, 0x20]);
            let value = LexiconParser.process(byteArray);
    
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
            let value = LexiconParser.process(byteArray);
    
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
            let value = LexiconParser.process(byteArray);
    
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
