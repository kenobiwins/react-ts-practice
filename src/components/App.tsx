import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { HomePage } from 'pages/HomePage/HomePage';
import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

export const App: FC = () => {
  return (
    <Routes>
      <Route path="" element={<SharedLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route path="*" element={<Navigate to={'/'} />} />
    </Routes>
  );
};
