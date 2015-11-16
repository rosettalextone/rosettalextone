import { SymbolType } from "./../control";

export let WestNormalChars = new Map();

Array
    .apply(null, Array(0xFF))
    .map((_, i) => i + 1)
    .map((i) => {
        WestNormalChars.set(i, i);
    })