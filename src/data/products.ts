// Product catalog — one entry per model (7 total). Colours swap the product photo;
// sizes (where present) are informational tags only. Kept bilingual (en/fa) so the
// language toggle can swap every label. Photos live at /assets/products/<slug>.jpg.

export type Lang = 'en' | 'fa';
export interface Bi {
  en: string;
  fa: string;
}

export type ColorKey = 'white' | 'steel' | 'black' | 'natural';
export type SizeKey = 'S' | 'M' | 'L';

export const COLORS: Record<ColorKey, { hex: string; en: string; fa: string }> = {
  white: { hex: '#F2ECE0', en: 'White', fa: 'سفید' },
  steel: { hex: '#9B9A95', en: 'Steel', fa: 'استیل' },
  black: { hex: '#24221F', en: 'Black', fa: 'مشکی' },
  natural: { hex: '#B98A50', en: 'Natural', fa: 'چوب طبیعی' },
};

export const SIZES: Record<SizeKey, Bi> = {
  S: { en: 'Small', fa: 'کوچک' },
  M: { en: 'Medium', fa: 'متوسط' },
  L: { en: 'Large', fa: 'بزرگ' },
};

export const IMG_BASE = '/assets/products/';

export interface Product {
  cat: Bi;
  name: Bi;
  code: string;
  colors: ColorKey[];
  sizes: SizeKey[] | null;
  meta: Bi;
  img: Partial<Record<ColorKey, string>>;
  def: { color: ColorKey };
}

export const PRODUCTS: Product[] = [
  {
    cat: { en: 'Serving tray', fa: 'سینی سرو' },
    name: { en: 'Venice', fa: 'ونیز' },
    code: '1001',
    colors: ['white', 'steel', 'black'],
    sizes: ['S', 'M', 'L'],
    meta: { en: 'Oak rim · steel body', fa: 'قاب بلوط · بدنهٔ استیل' },
    img: { white: 'venice-white', steel: 'venice-steel', black: 'venice-black' },
    def: { color: 'white' },
  },
  {
    cat: { en: 'Serving tray', fa: 'سینی سرو' },
    name: { en: 'Rushel', fa: 'روشل' },
    code: '1002',
    colors: ['white', 'steel', 'black'],
    sizes: null,
    meta: { en: 'Curved wood handles', fa: 'دسته‌های چوبی منحنی' },
    img: { white: 'rushel-white', steel: 'rushel-steel', black: 'rushel-black' },
    def: { color: 'white' },
  },
  {
    cat: { en: 'Serving tray', fa: 'سینی سرو' },
    name: { en: 'Riona', fa: 'ریونا' },
    code: '1003',
    colors: ['white', 'steel', 'black'],
    sizes: null,
    meta: { en: 'Brushed-steel base', fa: 'پایهٔ استیل مات' },
    img: { white: 'riona-white', steel: 'riona-steel', black: 'riona-black' },
    def: { color: 'white' },
  },
  {
    cat: { en: 'Tissue box', fa: 'جادستمالی' },
    name: { en: 'Roysa', fa: 'رویسا' },
    code: '2002',
    colors: ['white', 'steel', 'black'],
    sizes: null,
    meta: { en: 'Slotted front panel', fa: 'پنل جلوی مشبک' },
    img: { white: 'roysa-white', steel: 'roysa-steel', black: 'roysa-black' },
    def: { color: 'white' },
  },
  {
    cat: { en: 'Tissue box', fa: 'جادستمالی' },
    name: { en: 'Eliza', fa: 'الیزا' },
    code: '2001',
    colors: ['black'],
    sizes: null,
    meta: { en: 'Wood-slat, low profile', fa: 'چوبی، کوتاه' },
    img: { black: 'eliza-black' },
    def: { color: 'black' },
  },
  {
    cat: { en: 'Waste bin', fa: 'سطل زباله' },
    name: { en: 'Sana', fa: 'سانا' },
    code: '2003',
    colors: ['black', 'white', 'natural'],
    sizes: null,
    meta: { en: 'Wood-slat waste bin', fa: 'سطل چوبی' },
    img: { black: 'bin-black', white: 'bin-white', natural: 'bin-natural' },
    def: { color: 'black' },
  },
  {
    cat: { en: 'Cutlery holder', fa: 'جای قاشق و چنگال' },
    name: { en: 'Vihan', fa: 'ویهان' },
    code: '3001',
    colors: ['white', 'black', 'steel'],
    sizes: null,
    meta: { en: 'Standing caddy', fa: 'ایستاده' },
    img: { white: 'vihan-white', black: 'vihan-black', steel: 'vihan-steel' },
    def: { color: 'white' },
  },
  {
    cat: { en: 'Warmer dish', fa: 'ظرف گرم‌نگه‌دار' },
    name: { en: 'Lavan', fa: 'لاوان' },
    code: '4001',
    colors: ['white', 'black', 'steel'],
    sizes: ['S', 'M', 'L'],
    meta: { en: 'Available in three sizes', fa: 'در سه اندازه' },
    img: { white: 'lavan-white-s', black: 'lavan-black-m', steel: 'lavan-steel-l' },
    def: { color: 'white' },
  },
];
