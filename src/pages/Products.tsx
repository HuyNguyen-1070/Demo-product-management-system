import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { products, categories } from '../data/mockData';
import { useLanguage } from '../contexts/LanguageContext';

const Products: React.FC = () => {
  const { currentLanguage, t } = useLanguage();
  const [productList, setProductList] = useState(products);

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProductList(productList.filter(p => p.id !== id));
    }
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? t(category.name) : '';
  };

  const tableHeaders = {
    vi: ['Tên', 'Giá', 'Danh mục', 'Thao tác'],
    en: ['Name', 'Price', 'Category', 'Actions'],
    fr: ['Nom', 'Prix', 'Catégorie', 'Actions']
  };

  return (
    <Layout>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            {t({ vi: 'Danh sách sản phẩm', en: 'Products', fr: 'Produits' })}
          </h1>
          <Link
            to="/products/add"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          >
            {t({ vi: 'Thêm sản phẩm', en: 'Add Product', fr: 'Ajouter un produit' })}
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                {Object.values(t(tableHeaders)).map((header, index) => (
                  <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {productList.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    {product.translations[currentLanguage].name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    ${product.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getCategoryName(product.categoryId)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap space-x-2">
                    <Link
                      to={`/products/${product.id}`}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      {t({ vi: 'Xem', en: 'View', fr: 'Voir' })}
                    </Link>
                    <Link
                      to={`/products/edit/${product.id}`}
                      className="text-yellow-600 hover:text-yellow-900"
                    >
                      {t({ vi: 'Sửa', en: 'Edit', fr: 'Modifier' })}
                    </Link>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      {t({ vi: 'Xóa', en: 'Delete', fr: 'Supprimer' })}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Products;