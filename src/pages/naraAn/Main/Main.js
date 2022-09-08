import React, { useState, useEffect } from 'react';

import RecommendUser from './components/RecommendUser';
import AsideFooter from './components/AsideFooter';
import Nav from '../../../components/Nav/Nav';
import StoryUser from './components/StoryUser';
import Feeds from './Feeds';
import './Main.scss';

function Main() {
  const [feedInfoList, setFeedInfoList] = useState([]);
  const userWecode = 'wecode_37th';

  useEffect(() => {
    fetch('../../../../data/feedData.json')
      .then(response => response.json())
      .then(result => setFeedInfoList(result));
  }, []);

  return (
    <>
      <Nav />
      <main>
        <div className="feeds">
          {feedInfoList.map(feedInfo => {
            return (
              <Feeds
                key={feedInfo.id}
                userImg={feedInfo.user_image}
                userName={feedInfo.user_name}
                feedImg={feedInfo.feed_image}
                likeUserImg={feedInfo.like_user_image}
                likeUserName={feedInfo.like_user_name}
                feedComment={feedInfo.comment}
              />
            );
          })}
        </div>
        <aside className="main_right">
          <header className="main_right_title">
            <img
              className="user_img"
              alt="duck"
              src="../../../../images/naraAn/profile/duck.jpg"
            />
            <div>
              <span className="user_name">{userWecode}</span>
              <p>wecode | 위코드</p>
            </div>
          </header>
          <div className="main_right_story">
            <div className="story_title">
              <p>스토리</p>
              <p>모두보기</p>
            </div>
            <StoryUser />
          </div>
          <div className="main_right_recommend">
            <div className="recommend_title">
              <p>회원님을 위한 추천</p>
              <p>모두보기</p>
            </div>
            <RecommendUser />
          </div>
          <AsideFooter />
        </aside>
      </main>
    </>
  );
}

export default Main;
