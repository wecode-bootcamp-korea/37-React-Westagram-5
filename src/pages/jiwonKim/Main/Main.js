import React from 'react';

import './Main.scss';

import Navibar from './Navibar';
import Feeds from './Feeds';
import MainRight from './MainRight';
import MainLeft from './MainLeft';

function MainJiwon() {
  return (
    <div className="mainContainer">
      <Navibar />
      <div className="mainBody">
        <MainLeft />
        <MainRight />
      </div>
    </div>
  );
}

export default MainJiwon;
