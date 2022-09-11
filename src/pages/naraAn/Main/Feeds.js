import React, { useState } from 'react';
import CommentList from './components/CommentList';
import Comment from './components/Comment';
import FeedIcons from './components/feedIcons';

function Feeds({ feedInfo }) {
  const [container, setContainer] = useState([]);
  const [comment, setComment] = useState('');
  const [id, setId] = useState(0);
  const vaildBtn = comment.length > 0 ? false : true;

  function getValue(event) {
    event.preventDefault();
    setComment(event.target.value);
  }

  function addComment(e) {
    e.preventDefault();
    setContainer([...container, { key: id, item: comment, id: 'wecode_37th' }]);
    setId(id + 1);
    setComment('');
  }

  return (
    <article>
      <header className="feeds_header">
        <div className="user_data">
          <img
            className="user_img"
            alt="피드 사용자 프로필 이미지"
            src={feedInfo.user_image}
          />
          <span className="user_name">{feedInfo.user_name}</span>
        </div>
        <button>
          <i className="fa-solid fa-ellipsis" />
        </button>
      </header>
      <div className="feeds_main">
        <span className="main_img">
          <img alt="피드 이미지" src={feedInfo.feed_image} />
        </span>
        <div className="feed_contents">
          <FeedIcons />
          <div className="feed_likes">
            <img
              className="user_img"
              alt="좋아요를 클릭한 사용자 이미지"
              src={feedInfo.like_user_image}
            />
            <span className="user_name">{feedInfo.like_user_name}</span>
            <span>님 외 10명이 좋아합니다</span>
          </div>
          <ul className="feed_text">
            <Comment id={feedInfo.user_name} item={feedInfo.comment} />
            <li>
              <button>더보기</button>
            </li>
          </ul>
          <CommentList container={container} />
          <p>42분 전</p>
        </div>
      </div>
      <footer>
        <form onSubmit={addComment} className="comment_write">
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
  );
}
export default Feeds;
