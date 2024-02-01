import { ReactNode } from 'react';

import Header from '../Header';
import Footer from '../Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <div className="layout">
        <Header />
        <main className="content">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
