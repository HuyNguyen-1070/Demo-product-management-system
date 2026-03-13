export type Language = 'vi' | 'en' | 'fr';

export interface Translation {
  vi: string;
  en: string;
  fr: string;
}

export interface Category {
  id: string;
  name: Translation;
}

export interface Product {
  id: string;
  price: number;
  categoryId: string;
  translations: {
    vi: {
      name: string;
      description: string;
    };
    en: {
      name: string;
      description: string;
    };
    fr: {
      name: string;
      description: string;
    };
  };
}

export interface LanguageOption {
  code: Language;
  name: string;
  flag: string;
}