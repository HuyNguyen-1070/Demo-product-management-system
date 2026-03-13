import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { products, categories } from '../data/mockData';
import { useLanguage } from '../contexts/LanguageContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { currentLanguage, t } = useLanguage();
  
  const product = products.find(p => p.id === id);
  const category = product ? categories.find(c => c.id === product.categoryId) : null;

  if (!product) {
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
      name: 'Tên sản phẩm',
      price: 'Giá',
      description: 'Mô tả',
      category: 'Danh mục',
      back: 'Quay lại'
    },
    en: {
      name: 'Product Name',
      price: 'Price',
      description: 'Description',
      category: 'Category',
      back: 'Back'
    },
    fr: {
      name: 'Nom du produit',
      price: 'Prix',
      description: 'Description',
      category: 'Catégorie',
      back: 'Retour'
    }
  };

  return (
    <Layout>
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          {t({ vi: 'Chi tiết sản phẩm', en: 'Product Details', fr: 'Détails du produit' })}
        </h1>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t(labels).name}
            </label>
            <p className="text-lg text-gray-900">{product.translations[currentLanguage].name}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t(labels).price}
            </label>
            <p className="text-lg text-gray-900">${product.price}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t(labels).description}
            </label>
            <p className="text-gray-700">{product.translations[currentLanguage].description}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t(labels).category}
            </label>
            <p className="text-lg text-gray-900">{category ? t(category.name) : ''}</p>
          </div>

          <div className="pt-4">
            <Link
              to="/products"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              ← {t(labels).back}
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;