import { SymbolType } from "./../control";

export let SupChars = new Map();

Array
    .apply(null, Array(0xFF))
    .map((_, i) => i + 1)
    .map((i) => {
        SupChars.set(i, i);
    })