// SharedLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function SharedLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Outlet />
      <Footer />
    </>
  );
}

export default SharedLayout;