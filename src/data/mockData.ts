import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: {
      vi: 'Điện thoại',
      en: 'Phones',
      fr: 'Téléphones'
    }
  },
  {
    id: '2',
    name: {
      vi: 'Laptop',
      en: 'Laptops',
      fr: 'Ordinateurs portables'
    }
  },
  {
    id: '3',
    name: {
      vi: 'Phụ kiện',
      en: 'Accessories',
      fr: 'Accessoires'
    }
  }
];

export const products: Product[] = [
  {
    id: '1',
    price: 999,
    categoryId: '1',
    translations: {
      vi: {
        name: 'iPhone 14 Pro',
        description: 'Điện thoại thông minh cao cấp của Apple với chip A16'
      },
      en: {
        name: 'iPhone 14 Pro',
        description: 'Premium smartphone from Apple with A16 chip'
      },
      fr: {
        name: 'iPhone 14 Pro',
        description: 'Smartphone premium d\'Apple avec puce A16'
      }
    }
  },
  {
    id: '2',
    price: 1299,
    categoryId: '2',
    translations: {
      vi: {
        name: 'MacBook Pro 14',
        description: 'Laptop chuyên nghiệp với chip M2 Pro'
      },
      en: {
        name: 'MacBook Pro 14',
        description: 'Professional laptop with M2 Pro chip'
      },
      fr: {
        name: 'MacBook Pro 14',
        description: 'Ordinateur portable professionnel avec puce M2 Pro'
      }
    }
  },
  {
    id: '3',
    price: 199,
    categoryId: '3',
    translations: {
      vi: {
        name: 'Tai nghe AirPods Pro',
        description: 'Tai nghe không dây với chống ồn chủ động'
      },
      en: {
        name: 'AirPods Pro',
        description: 'Wireless earbuds with active noise cancellation'
      },
      fr: {
        name: 'AirPods Pro',
        description: 'Écouteurs sans fil avec réduction active du bruit'
      }
    }
  }
];