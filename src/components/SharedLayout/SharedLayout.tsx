import { Navigation } from 'components/Navigation/Navigation';
import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import './index.css';

export const SharedLayout: FC = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <footer className="footer"></footer>
    </>
  );
};
