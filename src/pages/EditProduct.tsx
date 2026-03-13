import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { categories, products } from '../data/mockData';
import { useLanguage } from '../contexts/LanguageContext';
import { Product } from '../types';

const EditProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { currentLanguage, t } = useLanguage();
  
  const [formData, setFormData] = useState<Product | null>(null);

  useEffect(() => {
    const product = products.find(p => p.id === id);
    if (product) {
      setFormData(product);
    }
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData) {
      const index = products.findIndex(p => p.id === id);
      if (index !== -1) {
        products[index] = formData;
      }
      navigate('/products');
    }
  };

  if (!formData) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h2 className="text-2xl text-red-600">
            {t({ vi: 'Không tìm thấy sản phẩm', en: 'Product not found', fr: 'Produit non trouvé' })}
          </h2>
        </div>
      </Layout>
    );
  }

  const labels = {
    vi: {
      title: 'Chỉnh sửa sản phẩm',
      price: 'Giá',
      category: 'Danh mục',
      selectCategory: 'Chọn danh mục',
      submit: 'Cập nhật',
      cancel: 'Hủy'
    },
    en: {
      title: 'Edit Product',
      price: 'Price',
      category: 'Category',
      selectCategory: 'Select category',
      submit: 'Update',
      cancel: 'Cancel'
    },
    fr: {
      title: 'Modifier le produit',
      price: 'Prix',
      category: 'Catégorie',
      selectCategory: 'Sélectionner une catégorie',
      submit: 'Mettre à jour',
      cancel: 'Annuler'
    }
  };

  return (
    <Layout>
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">{t(labels).title}</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t(labels).price}
            </label>
            <input
              type="number"
              step="0.01"
              required
              value={formData.price}
              onChange={(e) => setFormData({...formData, price: parseFloat(e.target.value)})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t(labels).category}
            </label>
            <select
              required
              value={formData.categoryId}
              onChange={(e) => setFormData({...formData, categoryId: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">{t(labels).selectCategory}</option>
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>{t(cat.name)}</option>
              ))}
            </select>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-700">
              {t({ vi: 'Thông tin đa ngôn ngữ', en: 'Multilingual Information', fr: 'Informations multilingues' })}
            </h3>
            
            {(['vi', 'en', 'fr'] as const).map((lang) => (
              <div key={lang} className="border p-4 rounded-md">
                <h4 className="font-medium mb-3">
                  {lang === 'vi' ? '🇻🇳 Tiếng Việt' : lang === 'en' ? '🇬🇧 English' : '🇫🇷 Français'}
                </h4>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder={lang === 'vi' ? 'Tên sản phẩm' : lang === 'en' ? 'Product name' : 'Nom du produit'}
                    required
                    value={formData.translations[lang].name}
                    onChange={(e) => setFormData({
                      ...formData,
                      translations: {
                        ...formData.translations,
                        [lang]: { ...formData.translations[lang], name: e.target.value }
                      }
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <textarea
                    placeholder={lang === 'vi' ? 'Mô tả' : lang === 'en' ? 'Description' : 'Description'}
                    required
                    value={formData.translations[lang].description}
                    onChange={(e) => setFormData({
                      ...formData,
                      translations: {
                        ...formData.translations,
                        [lang]: { ...formData.translations[lang], description: e.target.value }
                      }
                    })}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => navigate('/products')}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
            >
              {t(labels).cancel}
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              {t(labels).submit}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default EditProduct;