"use strict";

import BinaryReader from "./binary_reader";
import { process } from "./lexicon-parser";
import MiddleConvertor from "./middle-convertor";
import HtmlUnicodeConvertor from "./html-unicode-convertor";

exports.run = () => {

    console.log("Hello, world!");

    let byteArray;

    try {
        byteArray = BinaryReader.readFile("testfile.txt");
    } catch (e) {
        console.log("File read error: " + e.toString());
        console.log("Error stack: " + e.stack);
    }

    try {
        process(byteArray);
    } catch(e) {
        console.log("Buffer parse error: " + e.toString());
        console.log("Error stack: " + e.stack);
    }

    // let middleConvertorResult = middleConvertor.convert(parseResult);

    // let result = htmlUnicodeConvertor.convert(middleConvertorResult);

    // Write result to file...

    // console.log("Hello, world!");

    return 0;
}
