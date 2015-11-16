import { SymbolType } from "./../control";

export let SubChars = new Map();

Array
    .apply(null, Array(0xFF))
    .map((_, i) => i + 1)
    .map((i) => {
        SubChars.set(i, i);
    })