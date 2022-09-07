import React, { useState, useEffect } from 'react';
import CommentList from './components/CommentList';
import Comment from './components/Comment';
import FeedIcons from './components/feedIcons';

function Feeds(props) {
  const { userWecode } = props;
  const [container, setContainer] = useState([]);
  const [comment, setComment] = useState('');
  const [id, setId] = useState(0);
  const [feedInfoList, setFeedInfoList] = useState([]);
  const vaildBtn = comment.length > 0 ? false : true;

  useEffect(() => {
    fetch('../../../../data/feedData.json')
      .then(response => response.json())
      .then(result => setFeedInfoList(result));
  }, []);

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
    <div className="feeds">
      {feedInfoList.map(feedInfo => {
        return (
          <div key={feedInfo.id}>
            <article>
              <header className="feeds_header">
                <div className="user_data">
                  <img
                    className="user_img"
                    alt="character"
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
                  <img alt="waikiki beach" src={feedInfo.feed_image} />
                </span>
                <div className="feed_contents">
                  <FeedIcons />
                  <div className="feed_likes">
                    <img
                      className="user_img"
                      alt="minions"
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
        );
      })}
    </div>
  );
}
export default Feeds;
