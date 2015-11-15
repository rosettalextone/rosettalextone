import { SymbolType } from "./../control";

export let NormalChars = new Map();

NormalChars.set(0x20, 0x20); // пробел

Array
    .apply(null, Array(0xFF))
    .map((_, i) => i + 1)
    .map((i) => {
        NormalChars.set(i, i);
    })
