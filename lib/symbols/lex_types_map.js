export const TypeMap = new Map();

TypeMap.set(0x30, "Normal");       // 0 - нормальный шрифт с поддержакой кириллицы
TypeMap.set(0x31, "Italic");       // 1 - курсивный шрифт с поддержкой кириллицы
TypeMap.set(0x32, "Bold");         // 2 - полужирный шрифт с поддержкой кириллицы
TypeMap.set(0x33, "ItalicBold");   // 3 - полужирно-курсивный шрифт с поддержкой кириллицы
TypeMap.set(0x34, "Sub");          // 4 - подстрочный шрифт с поддержкой кириллицы
TypeMap.set(0x35, "Sup");          // 5 - надстрочный шрифт с поддержкой кириллицы

TypeMap.set(0x36, "Rounded");  // 6 - повернутый на pi/2 шрифт с поддержкой кириллицы
TypeMap.set(0x37, "Greek");    // 7 - шрифт с греческими и математическими символами

TypeMap.set(0x38, "WestNormal");       // 8 - нормальный шрифт с без кириллицы
TypeMap.set(0x39, "WestItalic");       // 9 - курсивный шрифт с без кириллицы
TypeMap.set(0xC1, "WestBold");         // полужирный шрифт с без кириллицы
TypeMap.set(0xC2, "WestItalicBold");   // полужирно-курсивный шрифт с без кириллицы

TypeMap.set(0xC7, "Small");    // уменьшенный шрифт с поддержкой кириллицы ??
TypeMap.set(0xCD, "Gothic");   // шрифт с готическими латинскими символами и другими

TypeMap.set(0x5F, "Underline");            // '_' - включение подчеркивания
TypeMap.set(0x2E, "DisableUnderline");     // '.' - отключение подчеркивание

export const Type = Object.freeze({
    Normal:     0x30,
    Italic:     0x31,
    Bold:       0x32,
    ItalicBold: 0x33,

    Sub:        0x34,
    Sup:        0x35,

    Rounded:    0x36,
    Greek:      0x37,

    WestNormal:     0x38,
    WestItalic:     0x39,
    WestBold:       0xC1,
    WestItalicBold: 0xC2,

    Small:      0xC7,
    Gothic:     0xCD,

    Underline:        0x5F,
    DisableUnderline: 0x2E
});