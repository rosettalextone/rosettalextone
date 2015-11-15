import { SymbolType } from "./../control";

export let GreekChars = new Map();

Array
    .apply(null, Array(0xFF))
    .map((_, i) => i + 1)
    .map((i) => {
        GreekChars.set(i, i);
    })