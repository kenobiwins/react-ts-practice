import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import { HomePage } from 'pages/HomePage/HomePage';
import { ProductsDetailsPage } from 'pages/ProductsDetailsPage/ProductsDetailsPage';
import ProductsPage from 'pages/ProductsPage/ProductsPage';
import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

export const App: FC = () => {
  return (
    <Routes>
      <Route path="" element={<SharedLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:productId" element={<ProductsDetailsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
      <Route path="*" element={<Navigate to={'/'} />} />
    </Routes>
  );
};
