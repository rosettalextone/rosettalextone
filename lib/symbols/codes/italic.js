import { SymbolType } from "./../control";

export let ItalicChars = new Map();

Array
    .apply(null, Array(0xFF))
    .map((_, i) => i + 1)
    .map((i) => {
        ItalicChars.set(i, i);
    })


