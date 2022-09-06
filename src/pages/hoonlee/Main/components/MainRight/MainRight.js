import React from 'react';
import MainRightFooter from './components/MainRightFooter';
import MainRightHeader from './components/MainRightHeader';
import MainRightRecommand from './components/MainRightRecommand';
import MainRightStory from './components/MainRightStory';

function MainRight(props) {
  return (
    <div className="main-right">
      <MainRightHeader />
      <MainRightStory />
      <MainRightRecommand />
      <MainRightFooter />
    </div>
  );
}

export default MainRight;
