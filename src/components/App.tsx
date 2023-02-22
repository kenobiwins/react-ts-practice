import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { HomePage } from 'pages/HomePage/HomePage';
import { ProductsDetailsPage } from 'pages/ProductsDetailsPage/ProductsDetailsPage';
import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

export const App: FC = () => {
  return (
    <Routes>
      <Route path="" element={<SharedLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<p>products </p>} />
        <Route path="/products/:productId" element={<ProductsDetailsPage />} />
      </Route>
      <Route path="*" element={<Navigate to={'/'} />} />
    </Routes>
  );
};
