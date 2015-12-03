import { SymbolType } from "./../../../control";

// Символы рисования рамок и символы заполнения (доп.)
export const BorderBold = new Map();

BorderBase.set(0xB3, 0x2503); // ┃ (Граница жирная вертикальная U+2503)
BorderBase.set(0xB4, 0x252B); // ┫ (Граница жирная вертикальная и налево U+252B)
BorderBase.set(0xBF, 0x2513); // ┓ (Граница жирная вниз и налево U+2513)

BorderBase.set(0xC0, 0x2517); // ┗ (Граница жирная вверх и направо U+2517)
BorderBase.set(0xC1, 0x253B); // ┻ (Граница жирная вверх и горизонтально U+253B)
BorderBase.set(0xC2, 0x2533); // ┳ (Граница жирная вниз и горизонтально U+2533)
BorderBase.set(0xC3, 0x2523); // ┣ (Граница жирная вертикальная и направо U+2523)
BorderBase.set(0xC4, 0x2501); // ━ (Граница жирная горизонтальная U+2501)
BorderBase.set(0xC5, 0x254B); // ╋ (Граница жирная вертикально и горизонтально U+254B)

BorderBase.set(0xD9, 0x251B); // ┛ (Граница жирная вверх и налево U+251B)
BorderBase.set(0xDA, 0x250F); // ┏ (Граница жирная вниз и направо U+250F)