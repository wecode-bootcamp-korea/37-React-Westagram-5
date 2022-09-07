import React from 'react';
import NavLeft from 'components/Nav/components/NavLeft';
import NavCenter from 'components/Nav/components/NavCenter';
import NavRight from 'components/Nav/components/NavRight';
import 'components/Nav/Nav.scss';

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
