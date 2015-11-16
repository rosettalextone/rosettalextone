import { SymbolType } from "./../control";

export let SmallChars = new Map();

Array
    .apply(null, Array(0xFF))
    .map((_, i) => i + 1)
    .map((i) => {
        SmallChars.set(i, i);
    })