import React from 'react';
import Layout from '../components/Layout';
import { categories } from '../data/mockData';
import { useLanguage } from '../contexts/LanguageContext';

const Categories: React.FC = () => {
  const { t } = useLanguage();

  const headers = {
    vi: ['Tên danh mục', 'Tiếng Việt', 'English', 'Français'],
    en: ['Category Name', 'Vietnamese', 'English', 'French'],
    fr: ['Nom de catégorie', 'Vietnamien', 'Anglais', 'Français']
  };

  return (
    <Layout>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          {t({ vi: 'Danh mục sản phẩm', en: 'Categories', fr: 'Catégories' })}
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                {Object.values(t(headers)).map((header, index) => (
                  <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {categories.map((category) => (
                <tr key={category.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap font-medium">
                    {t(category.name)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {category.name.vi}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {category.name.en}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {category.name.fr}
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

export default Categories;