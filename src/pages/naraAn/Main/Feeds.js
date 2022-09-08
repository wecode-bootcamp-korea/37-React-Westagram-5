import React, { useState } from 'react';
import CommentList from './components/CommentList';
import Comment from './components/Comment';
import FeedIcons from './components/feedIcons';

function Feeds({
  userImg,
  userName,
  feedImg,
  likeUserImg,
  likeUserName,
  feedComment,
}) {
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
          <img className="user_img" alt="userImage" src={userImg} />
          <span className="user_name">{userName}</span>
        </div>
        <button>
          <i className="fa-solid fa-ellipsis" />
        </button>
      </header>
      <div className="feeds_main">
        <span className="main_img">
          <img alt="feedImage" src={feedImg} />
        </span>
        <div className="feed_contents">
          <FeedIcons />
          <div className="feed_likes">
            <img className="user_img" alt="userImage" src={likeUserImg} />
            <span className="user_name">{likeUserName}</span>
            <span>님 외 10명이 좋아합니다</span>
          </div>
          <ul className="feed_text">
            <Comment id={userName} item={feedComment} />
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
  );
}
export default Feeds;
