import React from 'react';
import Header from '../Header/index';

const Layout = ({children, ...rest}) => (
  <div>
    <Header/>
    <div className="container">
      {children}
    </div>
  </div>
);

export default Layout;