import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const { t } = useLanguage();

  const navTranslations = {
    vi: { home: 'Trang chủ', products: 'Sản phẩm', categories: 'Danh mục' },
    en: { home: 'Home', products: 'Products', categories: 'Categories' },
    fr: { home: 'Accueil', products: 'Produits', categories: 'Catégories' }
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-4">
            <Link to="/" className="hover:text-gray-300 transition-colors">
              {t(navTranslations).home}
            </Link>
            <Link to="/products" className="hover:text-gray-300 transition-colors">
              {t(navTranslations).products}
            </Link>
            <Link to="/categories" className="hover:text-gray-300 transition-colors">
              {t(navTranslations).categories}
            </Link>
          </div>
          <LanguageSelector />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;