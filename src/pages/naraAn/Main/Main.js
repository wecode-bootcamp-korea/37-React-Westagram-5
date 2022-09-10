import React, { useState, useEffect } from 'react';

import MainRightRecommend from './components/MainRightRecommend';
import AsideFooter from './components/AsideFooter';
import Nav from '../../../components/Nav/Nav';
import MainRightStory from './components/MainRightStory';
import Feeds from './Feeds';
import './Main.scss';

function Main() {
  const [feedInfoList, setFeedInfoList] = useState([]);
  const userWecode = 'wecode_37th';

  useEffect(() => {
    fetch('/data/feedData.json')
      .then(response => response.json())
      .then(result => setFeedInfoList(result));
  }, []);

  return (
    <>
      <Nav />
      <main className="main">
        <div className="feeds">
          {feedInfoList.map(feedInfo => {
            return <Feeds key={feedInfo.id} feedInfo={feedInfo} />;
          })}
        </div>
        <aside className="main_right">
          <header className="main_right_title">
            <img
              className="user_img"
              alt="사용자 프로필 이미지"
              src="/images/naraAn/profile/duck.jpg"
            />
            <div>
              <span className="user_name">{userWecode}</span>
              <p>wecode | 위코드</p>
            </div>
          </header>
          <MainRightStory />
          <MainRightRecommend />
          <AsideFooter />
        </aside>
      </main>
    </>
  );
}

export default Main;
