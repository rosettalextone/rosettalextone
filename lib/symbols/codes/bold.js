import { SymbolType } from "./../control";

export let BoldChars = new Map();

Array
    .apply(null, Array(0xFF))
    .map((_, i) => i + 1)
    .map((i) => {
        BoldChars.set(i, i);
    })