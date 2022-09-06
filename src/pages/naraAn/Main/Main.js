import React, { useState } from 'react';
import CommentList from './components/CommentList';
import Comment from './components/Comment';
import FeedIcons from './components/feedIcons';
import RecommendUser from './components/RecommendUser';
import Nav from '../../../components/Nav/Nav';
import StoryUser from './components/StoryUser';

import './Main.scss';

function Main() {
  const [container, setContainer] = useState([]);
  const [comment, setComment] = useState('');
  const [id, setId] = useState(0);
  const userId = 'nariiiii';
  const userWecode = 'wecode_37th';
  const vaildBtn = comment.length > 0 ? false : true;

  function getValue(event) {
    event.preventDefault();
    setComment(event.target.value);
  }

  function addComment(e) {
    e.preventDefault();
    setContainer([...container, { key: id, item: comment, id: userWecode }]);
    setId(id + 1);
    setComment('');
  }

  return (
    <>
      <Nav />
      <main>
        <div className="feeds">
          <article>
            <header className="feeds_header">
              <div className="user_data">
                <img
                  className="user_img"
                  alt="character"
                  src="../../../../images/naraAn/profile/tomung.jpeg"
                />
                <span className="user_name">{userId}</span>
              </div>
              <button>
                <i className="fa-solid fa-ellipsis" />
              </button>
            </header>
            <div className="feeds_main">
              <span className="main_img">
                <img
                  alt="waikiki beach"
                  src="../../../../images/naraAn/waikiki.jpeg"
                />
              </span>
              <div className="feed_contents">
                <FeedIcons />
                <div className="feed_likes">
                  <img
                    className="user_img"
                    alt="minions"
                    src="../../../../images/naraAn/profile/minions.jpg"
                  />
                  <span className="user_name">minions</span>
                  <span>님 외 10명이 좋아합니다</span>
                </div>
                <ul className="feed_text">
                  <Comment id={userId} item="여행가고 싶다 🥲" />
                  <li>
                    <button>더보기</button>
                  </li>
                </ul>
                <ul>
                  <CommentList container={container} />
                </ul>
                <p>42분 전</p>
              </div>
            </div>
            <footer>
              <form onSubmit={addComment} id="comment_write">
                <input
                  value={comment}
                  onChange={getValue}
                  type="text"
                  placeholder="댓글달기..."
                />
                <input type="submit" value="게시" disabled={vaildBtn} />
              </form>
            </footer>
          </article>
        </div>
        <div className="main_right">
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
        </div>
      </main>
    </>
  );
}

export default Main;
