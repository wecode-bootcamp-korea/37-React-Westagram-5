/* eslint-disable react/jsx-key */
import React, { useEffect } from 'react';
import { useState } from 'react';
import './Main.scss';

import Comment from './Comment';

const Feeds = ({ userImage, userName, uploadedImage, userComment }) => {
  const altMsg = '이미지 오류';
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [contentId, setContentId] = useState(1);

  const handleCommentChange = e => {
    setComment({ id: contentId, content: e.target.value });
  };
  // const commentValid = comment.content.length > 0;

  const commentSubmit = e => {
    e.preventDefault();
    setComments(prev => [comment, ...prev]);
    setContentId(prev => prev + 1);
    setComment({ id: contentId + 1, content: '' });
  };

  const handleXClick = e => {
    setComments(comments.filter(item => item.id !== e.id));
  };

  return (
    <div className="feedsContainer">
      <div className="feedsHeader">
        <img src={userImage} alt={altMsg} />
        <span>{userName}</span>
      </div>
      <img className="feedImage" src={uploadedImage} alt={altMsg} />
      <div className="reactionIcons">
        <div className="reactionIconsLeft">
          {ICON_IMAGES.map((e, i) => (
            <img src={e} alt={altMsg} key={i} />
          ))}
        </div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2990/2990295.png"
          alt={altMsg}
        />
      </div>
      <div className="howManyLikes">
        <img
          src="https://images.unsplash.com/photo-1659340180582-e3149b9e12b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
          alt={altMsg}
        />
        <span>zzomi 외 100명이 좋아합니다.</span>
      </div>
      <ul className="commentsBox">
        <li className="comment">
          <span className="commentId">{userName}</span>
          <span className="commentSaying">{userComment}</span>
        </li>
        {comments.map(e => (
          <Comment key={e.id} props={e} onXClick={() => handleXClick(e)} />
        ))}
        <span className="timePassed">0초 전</span>
      </ul>
      <form className="commentInputBox" onSubmit={commentSubmit}>
        <input
          className="commentInput"
          placeholder="댓글 쓰기..."
          onChange={handleCommentChange}
          value={comment.content || ''}
        />
        <button>게시</button>
      </form>
    </div>
  );
};

export default Feeds;

const ICON_IMAGES = [
  'https://cdn-icons-png.flaticon.com/512/1077/1077035.png',
  'https://cdn-icons-png.flaticon.com/512/7205/7205744.png',
  'https://cdn-icons-png.flaticon.com/512/2956/2956783.png',
];
