import { SymbolType } from "./../control";

export let RoundedChars = new Map();

Array
    .apply(null, Array(0xFF))
    .map((_, i) => i + 1)
    .map((i) => {
        RoundedChars.set(i, i);
    })