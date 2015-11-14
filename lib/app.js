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
    }

    let processArray;

    try {
        processArray = process(byteArray);
    } catch(e) {
        console.log("Buffer parse error: " + e.toString());
    }

    if (typeof processArray !== 'undefined')
        console.log(JSON.stringify({array: processArray}));
    else
        console.log("Error: can't turn object to string!");

    // let middleConvertorResult = middleConvertor.convert(parseResult);

    // let result = htmlUnicodeConvertor.convert(middleConvertorResult);

    // Write result to file...

    // console.log("Hello, world!");

    return 0;
}
