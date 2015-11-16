import { SymbolType } from "./../../../control";

// Символы рисования рамок и символы заполнения (доп.) -- в Unicode отсутствуют похожие символы
export const BorderItalicBold = new Map();

BorderItalicBold.set(0xB3, 0x2502); // │ (Граница легкая вертикальная U+2502)
BorderItalicBold.set(0xB4, 0x2524); // ┤ (Граница легкая вертикальная и налево U+2524)\
BorderItalicBold.set(0xBF, 0x2510); // ┐ (Граница легкая вниз и налево U+2510)

BorderItalicBold.set(0xC0, 0x2514); // └ (Граница легкая вверх и направо U+2514)
BorderItalicBold.set(0xC1, 0x2534); // ┴ (Граница легкая вверх и горизонтально U+2534)
BorderItalicBold.set(0xC2, 0x252C); // ┬ (Граница легкая вниз и горизонтально U+252C)
BorderItalicBold.set(0xC3, 0x251C); // ├ (Граница легкая вертикальная и направо U+251C)
BorderItalicBold.set(0xC4, 0x2500); // ─ (Граница легкая горизонтальная U+2500)
BorderItalicBold.set(0xC5, 0x253C); // ┼ (Граница легкая вертикальная и горизонтальная U+253C)

BorderItalicBold.set(0xD9, 0x2518); // ┘ (Граница легкая вверх и налево U+2518)
BorderItalicBold.set(0xDA, 0x250C); // ┌ (Граница легкая вниз в направо U+250C)