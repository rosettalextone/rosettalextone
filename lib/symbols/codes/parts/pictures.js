import { SymbolType } from "./../../control";

// Пиктограммы и рисунки
export const Pictures = new Map();

Pictures.set(0x01, 0x263A); // ☺ (Незакрашенное улыбающееся лицо U+263A)
Pictures.set(0x02, 0x263B); // ☻ (Закрашенное улыбающееся лицо U+263B)
Pictures.set(0x03, 0x2665); // ♥ (Черви закрашенные U+2665)
Pictures.set(0x04, 0x2666); // ♦ (Бубны закрашенные U+2666)
Pictures.set(0x05, 0x2663); // ♣ (Трефы закрашенные U+2663)
Pictures.set(0x06, 0x2660); // ♠ (Пики закрашенные U+2660)

Pictures.set(0x07, SymbolType.NotExist); // 0 ()
Pictures.set(0x08, SymbolType.NotExist); // 0 ()
Pictures.set(0x09, SymbolType.NotExist); // 0 ()

Pictures.set(0x0B, 0x2642); // ♂ (Мужской знак U+2642)
Pictures.set(0x0C, 0x2640); // ♀ (Женский знак U+2640)
Pictures.set(0x0E, 0x266B); // ♫ (Связанные восьмые ноты U+266B) ??
Pictures.set(0x0F, 0x2600); // ☀ (Закрашенное солнце с лучами U+2600)
Pictures.set(0x10, 0x25B6); // ▶ (Черный треугольник с вершиной направо U+25B6)
Pictures.set(0x11, 0x25C0); // ◀ (Черный треугольник с вершиной налево U+25C0)
Pictures.set(0x12, 0x2195); // ↕ (Двойная стрелка вверх-вниз U+2195)
Pictures.set(0x13, 0x203C); // ‼ (Двойной восклицательный знак U+203C)
Pictures.set(0x14, 0x00B6); // ¶ (Знак абзаца U+00B6)
Pictures.set(0x15, 0x00A7); // § (Параграф U+00A7)
Pictures.set(0x16, 0x25A0); // ■ (Черный квадрат U+25A0)
Pictures.set(0x17, 0x21A8); // ↨ (Стрелка вверх и вниз от планки внизу U+21A8)
Pictures.set(0x18, 0x2191); // ↑ (Стрелка вверх U+2191)
Pictures.set(0x19, 0x2193); // ↓ (Стрелка вниз U+2193)
Pictures.set(0x1A, 0x2192); // → (Стрелка направо U+2192)
Pictures.set(0x1B, 0x2190); // ← (Стрелка влево U+2190)
Pictures.set(0x1C, 0x221F); // ∟ (Прямой угол U+221F)
Pictures.set(0x1D, 0x2194); // ↔ (Двойная стрелка влево-вправо U+2194)
Pictures.set(0x1E, 0x25B2); // ▲ (Черный треугольник с вершиной вверх U+25B2)
Pictures.set(0x1F, 0x25BE); // ▾ (Маленький черный треугольник с вершиной вниз U+25BE)