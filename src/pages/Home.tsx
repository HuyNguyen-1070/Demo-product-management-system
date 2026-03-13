import React from 'react';
import Layout from '../components/Layout';
import { useLanguage } from '../contexts/LanguageContext';

const Home: React.FC = () => {
  const { t } = useLanguage();

  const welcomeTranslations = {
    vi: {
      title: 'Chào mừng đến với Hệ thống Quản lý Sản phẩm',
      description: 'Quản lý sản phẩm và danh mục đa ngôn ngữ dễ dàng'
    },
    en: {
      title: 'Welcome to Product Management System',
      description: 'Easily manage products and categories in multiple languages'
    },
    fr: {
      title: 'Bienvenue sur le Système de Gestion de Produits',
      description: 'Gérez facilement les produits et catégories en plusieurs langues'
    }
  };

  return (
    <Layout>
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {t(welcomeTranslations).title}
        </h1>
        <p className="text-xl text-gray-600">
          {t(welcomeTranslations).description}
        </p>
      </div>
    </Layout>
  );
};

export default Home;