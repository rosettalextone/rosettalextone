import { SymbolType } from "./../../control";

// Символы греческого алфавита и математические символы
export const Greek = new Map();

Greek.set(0x20, 0x0020); // _ (Пробел U+0020)

Greek.set(0x21, SymbolType.NotExist); // 0 ()

Greek.set(0x22, 0x21C6); // ⇆ (Стрелка налево над стрелкой направо U+21C6)
Greek.set(0x23, 0x222E); // ∮ (Контурный интеграл U+222E)
Greek.set(0x24, 0x221E); // ∞ (Бесконечность U+221E)

Greek.set(0x25, SymbolType.NotExist); // 0 ()

Greek.set(0x26, 0x00D7); // × (Знак умножения U+00D7)
Greek.set(0x27, 0x2205); // ∅ (Пустое множество U+2205)
Greek.set(0x28, 0x239B); // ⎛ (Левая круглая скобка с крючком сверху U+239B)
Greek.set(0x29, 0x239E); // ⎞ (Правая круглая скобка с крючком сверху U+239E)
Greek.set(0x2A, 0x23A8); // ⎨ (Левая фигуная скобка со средней фигурой U+23A8)
Greek.set(0x2B, 0x00B1); // ± (Знак плюс-минус U+00B1)
Greek.set(0x2C, 0x2264); // ≤ (Меньше или равный U+2264)
Greek.set(0x2D, 0x2260); // ≠ (Не равный U+2260)
Greek.set(0x2E, 0x2265); // ≥ (Больше чем или равно U+2265)

Greek.set(0x2F, SymbolType.NotExist); // 0 ()

Greek.set(0x30, 0x23A0); // ⎠ (Правая круглая скобка с крючком снизу U+23A0)

Greek.set(0x31, SymbolType.NotExist); // 0 ()

Greek.set(0x32, 0x23AA); // ⎪(Фигурная скобка расширенная U+23AA)

Greek.set(0x33, SymbolType.NotExist); // ∫ (Интеграл U+222B)

Greek.set(0x34, SymbolType.NotExist); // 0 ()
Greek.set(0x35, SymbolType.NotExist); // 0 ()
Greek.set(0x36, SymbolType.NotExist); // 0 ()
Greek.set(0x37, SymbolType.NotExist); // 0 ()

Greek.set(0x38, 0x23AC); // ⎬(Правая фигуная скобка со средней фигурой U+23AC)
Greek.set(0x39, 0x239D); // ⎝ (Лева круглая скобка с крючком снизу U+239D)
Greek.set(0x3A, 0x2234); // ∴ (Следовательно U+2234)

Greek.set(0x3B, SymbolType.NotExist); // 0 ()

Greek.set(0x3C, 0x226A); // ≪ (Гораздо меньше, чем U+226A)
Greek.set(0x3D, 0x2261); // ≡ (Идентичный, тождество U+2261)
Greek.set(0x3E, 0x226B); // ≫ (Гораздо больше, чем U+226B)

Greek.set(0x3F, SymbolType.NotExist); // 0 ()
Greek.set(0x40, SymbolType.NotExist); // 0 ()

// БУКВЫ

Greek.set(0x41, SymbolType.NotExist); // Α (Греческая заглавная буква альфа U+0391)
Greek.set(0x42, SymbolType.NotExist); // Β (Греческая заглавная буква бета U+0392)
Greek.set(0x43, SymbolType.NotExist); // Χ (Греческая заглавная буква хи U+03A7)
Greek.set(0x44, SymbolType.NotExist); // Δ (Греческая заглавная буква дельта U+0394)
Greek.set(0x45, SymbolType.NotExist); // Ε (Греческая заглавная буква эпсилон U+0395)
Greek.set(0x46, SymbolType.NotExist); // Φ (Греческая заглавная буква фи U+03A6)
Greek.set(0x47, SymbolType.NotExist); // Γ (Греческая заглавная буква гамма U+0393)
Greek.set(0x48, SymbolType.NotExist); // Η (Греческая заглавная буква эта U+0397)
Greek.set(0x49, SymbolType.NotExist); // Ι (Греческая заглавная буква йота U+0399)
Greek.set(0x4A, SymbolType.NotExist); // Ψ (Греческая заглавная буква пси U+03A8)
Greek.set(0x4B, SymbolType.NotExist); // Κ (Греческая заглавная буква каппа U+039A)
Greek.set(0x4C, SymbolType.NotExist); // Λ (Греческая заглавная буква лямбда U+039B)
Greek.set(0x4D, SymbolType.NotExist); // Μ (Греческая заглавная буква мю U+039C)
Greek.set(0x4E, SymbolType.NotExist); // Ν (Греческая заглавная буква ню U+039D)
Greek.set(0x4F, SymbolType.NotExist); // Ο (Греческая заглавная буква омикрон U+039F)
Greek.set(0x50, SymbolType.NotExist); // Π (Греческая заглавная буква пи U+03A0)

Greek.set(0x51, SymbolType.NotExist); // 0 ()
Greek.set(0x52, SymbolType.NotExist); // 0 ()
Greek.set(0x53, SymbolType.NotExist); // 0 ()
Greek.set(0x54, SymbolType.NotExist); // 0 ()
Greek.set(0x55, SymbolType.NotExist); // 0 ()
Greek.set(0x56, SymbolType.NotExist); // 0 ()
Greek.set(0x57, SymbolType.NotExist); // 0 ()
Greek.set(0x58, SymbolType.NotExist); // 0 ()
Greek.set(0x59, SymbolType.NotExist); // 0 ()
Greek.set(0x5A, SymbolType.NotExist); // 0 ()
Greek.set(0x5B, SymbolType.NotExist); // 0 ()
Greek.set(0x5C, SymbolType.NotExist); // 0 ()
Greek.set(0x5D, SymbolType.NotExist); // 0 ()
Greek.set(0x5E, SymbolType.NotExist); // 0 ()
Greek.set(0x5F, SymbolType.NotExist); // 0 ()

Greek.set(0x60, SymbolType.NotExist); // 0 ()
Greek.set(0x61, SymbolType.NotExist); // 0 ()
Greek.set(0x62, SymbolType.NotExist); // 0 ()
Greek.set(0x63, SymbolType.NotExist); // 0 ()
Greek.set(0x64, SymbolType.NotExist); // 0 ()
Greek.set(0x65, SymbolType.NotExist); // 0 ()
Greek.set(0x66, SymbolType.NotExist); // 0 ()
Greek.set(0x67, SymbolType.NotExist); // 0 ()
Greek.set(0x68, SymbolType.NotExist); // 0 ()
Greek.set(0x69, SymbolType.NotExist); // 0 ()
Greek.set(0x6A, SymbolType.NotExist); // 0 ()
Greek.set(0x6B, SymbolType.NotExist); // 0 ()
Greek.set(0x6C, SymbolType.NotExist); // 0 ()
Greek.set(0x6D, SymbolType.NotExist); // 0 ()
Greek.set(0x6E, SymbolType.NotExist); // 0 ()
Greek.set(0x6F, SymbolType.NotExist); // 0 ()

Greek.set(0x70, SymbolType.NotExist); // 0 ()
Greek.set(0x71, SymbolType.NotExist); // 0 ()
Greek.set(0x72, SymbolType.NotExist); // 0 ()
Greek.set(0x73, SymbolType.NotExist); // 0 ()
Greek.set(0x74, SymbolType.NotExist); // 0 ()
Greek.set(0x75, SymbolType.NotExist); // 0 ()
Greek.set(0x76, SymbolType.NotExist); // 0 ()
Greek.set(0x77, SymbolType.NotExist); // 0 ()
Greek.set(0x78, SymbolType.NotExist); // 0 ()
Greek.set(0x79, SymbolType.NotExist); // 0 ()
Greek.set(0x7A, SymbolType.NotExist); // 0 ()
Greek.set(0x7B, SymbolType.NotExist); // 0 ()
Greek.set(0x7C, SymbolType.NotExist); // 0 ()
Greek.set(0x7D, SymbolType.NotExist); // 0 ()
Greek.set(0x7E, SymbolType.NotExist); // 0 ()

Greek.set(0x80, SymbolType.NotExist); // 0 ()
Greek.set(0x81, SymbolType.NotExist); // 0 ()
Greek.set(0x82, SymbolType.NotExist); // 0 ()

Greek.set(0x84, SymbolType.NotExist); // 0 ()
Greek.set(0x85, SymbolType.NotExist); // 0 ()

Greek.set(0x88, SymbolType.NotExist); // 0 ()

Greek.set(0x8B, SymbolType.NotExist); // 0 ()
Greek.set(0x8C, SymbolType.NotExist); // 0 ()

Greek.set(0x8F, SymbolType.NotExist); // 0 ()

Greek.set(0x91, SymbolType.NotExist); // 0 ()
Greek.set(0x92, SymbolType.NotExist); // 0 ()

Greek.set(0x94, SymbolType.NotExist); // 0 ()
Greek.set(0x95, SymbolType.NotExist); // 0 ()

Greek.set(0x9A, SymbolType.NotExist); // 0 ()

Greek.set(0x9C, SymbolType.NotExist); // 0 ()
Greek.set(0x9D, SymbolType.NotExist); // 0 ()
Greek.set(0x9E, SymbolType.NotExist); // 0 ()

Greek.set(0xA0, SymbolType.NotExist); // 0 ()

Greek.set(0xA2, SymbolType.NotExist); // 0 ()

Greek.set(0xA4, SymbolType.NotExist); // 0 ()
Greek.set(0xA5, SymbolType.NotExist); // 0 ()

Greek.set(0xA8, SymbolType.NotExist); // 0 ()

Greek.set(0xAB, SymbolType.NotExist); // 0 ()
Greek.set(0xAC, SymbolType.NotExist); // 0 ()

Greek.set(0xAF, SymbolType.NotExist); // 0 ()

Greek.set(0xB0, SymbolType.NotExist); // 0 ()
Greek.set(0xB1, SymbolType.NotExist); // 0 ()
Greek.set(0xB2, SymbolType.NotExist); // 0 ()
Greek.set(0xB3, SymbolType.NotExist); // 0 ()
Greek.set(0xB4, SymbolType.NotExist); // 0 ()
Greek.set(0xB5, SymbolType.NotExist); // 0 ()
Greek.set(0xB6, SymbolType.NotExist); // 0 ()
Greek.set(0xB7, SymbolType.NotExist); // 0 ()
Greek.set(0xB8, SymbolType.NotExist); // 0 ()
Greek.set(0xB9, SymbolType.NotExist); // 0 ()
Greek.set(0xBA, SymbolType.NotExist); // 0 ()
Greek.set(0xBB, SymbolType.NotExist); // 0 ()
Greek.set(0xBC, SymbolType.NotExist); // 0 ()
Greek.set(0xBD, SymbolType.NotExist); // 0 ()
Greek.set(0xBE, SymbolType.NotExist); // 0 ()
Greek.set(0xBF, SymbolType.NotExist); // 0 ()

Greek.set(0xC0, SymbolType.NotExist); // 0 ()

Greek.set(0xE1, SymbolType.NotExist); // 0 ()
Greek.set(0xE2, SymbolType.NotExist); // 0 ()

Greek.set(0xE4, SymbolType.NotExist); // 0 ()
Greek.set(0xE5, SymbolType.NotExist); // 0 ()

Greek.set(0xE7, SymbolType.NotExist); // 0 ()

Greek.set(0xEA, SymbolType.NotExist); // 0 ()

Greek.set(0xEC, SymbolType.NotExist); // 0 ()
Greek.set(0xED, SymbolType.NotExist); // 0 ()
