import React from 'react';

import '../../../styles/reset.scss';
import '../../../styles/common.scss';

import './Main.scss';

import Navibar from './Navibar';
import Feeds from './Feeds';
import MainRight from './MainRight';

function MainJiwon() {
  return (
    <div className="mainContainer">
      <Navibar item="안녕하세요" />
      <div className="mainBody">
        <Feeds />
        <MainRight />
      </div>
    </div>
  );
}

export default MainJiwon;
