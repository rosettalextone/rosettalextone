import { SymbolType } from "./../control";

export let GothicChars = new Map();

Array
    .apply(null, Array(0xFF))
    .map((_, i) => i + 1)
    .map((i) => {
        GothicChars.set(i, i);
    })