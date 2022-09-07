import React from 'react';

import RecommendUser from './components/RecommendUser';
import AsideFooter from './components/AsideFooter';
import Nav from '../../../components/Nav/Nav';
import StoryUser from './components/StoryUser';
import Feeds from './Feeds';
import './Main.scss';

function Main() {
  const userWecode = 'wecode_37th';

  return (
    <>
      <Nav />
      <main>
        <Feeds userWecode={userWecode} />
        <aside className="main_right">
          <header className="main_right_title">
            <img
              className="user_img"
              alt="duck"
              src="../../../../images/naraAn/profile/duck.jpg"
            />
            <di>
              <span className="user_name">{userWecode}</span>
              <p>wecode | 위코드</p>
            </di>
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
