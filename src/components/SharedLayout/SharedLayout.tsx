import { Navigation } from 'components/Navigation/Navigation';
import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import './index.css';
import Address from 'components/Address/Address';

export const SharedLayout: FC = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <div>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </div>
      </main>
      <footer className="footer">
        <Address />
      </footer>
    </>
  );
};
