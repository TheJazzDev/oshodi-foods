import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import MobileFooter from './MobileFooter';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className='py-20 sm:py-32'>{children}</main>
      <Footer />
      <MobileFooter />
    </div>
  );
};

export default Layout;
