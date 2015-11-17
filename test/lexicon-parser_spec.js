import { expect } from 'chai';
import { Control } from "./../lib/symbols/control";
import LexiconParser from '../lib/lexicon-parser';
import { Type } from "../lib/symbols/lex_types_map";
import fs from 'fs';

describe('Lexicon parser', () => {
    describe('#makeChunk()', () => {

        it(`should return instance of object with keys with certain properties`, () => {
            const chunk = LexiconParser.makeChunk(true, "Some Text");

            expect(chunk.underlined).to.equal(true);
            expect(chunk.type).to.be.a('string');
            expect(chunk.type).to.equal('Some Text');
            expect(chunk.symbols).to.be.an('array');
            expect(chunk.symbols.length).to.equal(0);
        });

    });

    describe('#divideByLines()', () => {

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

    describe('#parseLine()', () => {

        it('should return array', () => {
            const byteArray = new Buffer("I'm a buffer");
            const value = LexiconParser.parseLine(byteArray);

            expect(value).to.be.an('array');
        });

        it(`should return array of objects with certain properties`, () => {
            const byteArray = new Buffer("I'm a buffer");
            const value = LexiconParser.parseLine(byteArray);

            value.map(item => {
                expect(item).to.be.an('object');
                expect(item.underlined).to.be.a('boolean');
                expect(item.type).to.be.a('string');
                expect(item.symbols).to.be.an('array');
            });
        });

    });

    describe('#process()', () => {

        it('should return array with length equal to number of lines in input', () => {
            const byteArray = new Buffer("I'm a buffer\nAnd I have some\nlines", "ascii");
            const value = LexiconParser.process(byteArray);

            expect(value).to.be.an('array');
            expect(value.length).to.equal(3);
        });

        it('should return array of specific objects', () => {
            const byteArray = new Buffer("I'm a buffer\nAnd I have some\nlines", "ascii");
            const value = LexiconParser.process(byteArray);

            value.map(line => {
                expect(line).to.be.an('array');
                line.map(chunk => {
                    expect(chunk.underlined).to.be.a('boolean');
                    expect(chunk.type).to.be.a('string');
                    expect(chunk.symbols).to.be.an('array');
                })
            });
        });

        it('should return correct array of specific objects (with CR+LF)', () => {
            const byteArray = new Buffer([0x20, 0x20, Control.CR, Control.LF, 0x20, 0x20]);
            const value = LexiconParser.process(byteArray);

            expect(value.length).to.equal(2);
            value.map(line => {
                line.map(chunk => {
                    expect(chunk.underlined).to.equal(false);
                    expect(chunk.type).to.equal("Normal");
                    expect(chunk.symbols[0]).to.equal(0x20);
                    expect(chunk.symbols[1]).to.equal(0x20);
                })
            })
        });

        it('should return correct array of specific objects (LF)', () => {
            const byteArray = new Buffer([0x20, 0x20, Control.LF, 0x20, 0x20]);
            const value = LexiconParser.process(byteArray);

            expect(value.length).to.equal(2);
            value.map(line => {
                line.map(chunk => {
                    expect(chunk.underlined).to.equal(false);
                    expect(chunk.type).to.equal("Normal");
                    expect(chunk.symbols[0]).to.equal(0x20);
                    expect(chunk.symbols[1]).to.equal(0x20);
                })
            })
        });

        it('should correctly parse testfile', () => {
            const buffer = fs.readFileSync(`${__dirname }/fixtures/testfile.txt`);
            const parsedFile = LexiconParser.process(buffer);

            expect(parsedFile.length).to.equal(62);

            parsedFile.map(line => {
                expect(line).to.be.an('array');

                line.map(chunk => {
                    expect(chunk).to.be.an('object');
                    expect(Type[chunk.type]).to.not.equal(undefined);
                });
            })
        });
    });
});
