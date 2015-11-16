import { SymbolType } from "./../control";

export let ItalicBoldChars = new Map();

Array
    .apply(null, Array(0xFF))
    .map((_, i) => i + 1)
    .map((i) => {
        ItalicBoldChars.set(i, i);
    })