"use strict";

import LexiconParser from "./lexicon-parser";
import MiddleConvertor from "./middle-convertor";
import HtmlUnicodeConvertor from "./html-unicode-convertor";

exports.run = () => {

    let parser = new LexiconParser();

    try {
        parser.open("testfile.txt");
        parser.process();
    } catch(e) {
        console.log("File parse error: " + e.toString());
    }

    if (typeof parser.getFileBytes() === "undefined")
        console.log("Error: bytes undefined");
    else
        console.log(parser.getFileBytes().toString());
    
    // console.log(parser.getName());

    // lexiconParser.open("input");
    // let parseResult = lexiconParser.parse();

    // let middleConvertorResult = middleConvertor.convert(parseResult);

    // let result = htmlUnicodeConvertor.convert(middleConvertorResult);

    // Write result to file...

    console.log("Hello, world!");

    return 0;
}
