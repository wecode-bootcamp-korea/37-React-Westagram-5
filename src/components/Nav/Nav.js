import React from 'react';
import NavLeft from './components/NavLeft';
import NavCenter from './components/NavCenter';
import NavRight from './components/NavRight';
import './Nav.scss';

function Nav(props) {
  return (
    <nav>
      <div className="navContainer">
        <NavLeft />
        <NavCenter />
        <NavRight />
      </div>
    </nav>
  );
}

export default Nav;
