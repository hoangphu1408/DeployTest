import React, { Children } from 'react';
import Announcement from '../Announcement';
import Header from '../Header';
import TopBar from '../TopBar';

function DefaultLayout({ children }) {
  return (
    <div>
      <Announcement />
      <TopBar />
      <Header />
      {children}
    </div>
  );
}

export default DefaultLayout;
