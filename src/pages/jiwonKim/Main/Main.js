import React from 'react';

import Nav from '../../../components/Nav/Nav';
import MainRight from './MainRight';
import MainLeft from './MainLeft';

import './Main.scss';

function MainJiwon() {
  return (
    <div className="mainContainer">
      <Nav />
      <div className="mainBody">
        <MainLeft />
        <MainRight />
      </div>
    </div>
  );
}

export default MainJiwon;
