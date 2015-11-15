import BinaryReader from "./binary_reader";

import { process as lexProcess } from "./lexicon-parser";
import { process as unicodePlusProcess } from "./unicode-plus-convertor";
import { process as htmlProcess } from "./html-convertor";

exports.run = () => {

    // console.log("Hello, world!");

    let byteArray;

    try {
        byteArray = BinaryReader.readFile("test/fixtures/testfile.txt");
    } catch (e) {
        console.log("File read error: " + e.toString());
        return;
    }

    let lexArray;

    try {
        lexArray = lexProcess(byteArray);
    } catch(e) {
        console.log("Buffer parse error: " + e.toString());
        return;
    }

    // if (typeof lexArray !== 'undefined')
    //     console.log(JSON.stringify({array: lexArray}));
    // else
    //     console.log("Error: can't turn object to string!");

    let unicodePlusArray;

    try {
        unicodePlusArray = unicodePlusProcess(lexArray);
    } catch(e) {
        console.log("Buffer parse error: " + e.toString());
        return;
    }

    if (typeof unicodePlusArray !== 'undefined')
        console.log(JSON.stringify({array: unicodePlusArray}));
    else
        console.log("Error: can't turn object to string!");

    // Write result to file...

    return 0;
}
