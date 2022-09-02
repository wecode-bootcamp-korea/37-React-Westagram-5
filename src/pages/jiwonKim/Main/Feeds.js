import React from 'react';
import { useState } from 'react';
import './Main.scss';
import '../../../styles/reset.scss';
import '../../../styles/common.scss';

import Comment from './Comment';

const Feeds = () => {
  const altMsg = '이미지 오류';
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const handleCommentChange = e => {
    setComment(e.target.value);
  };
  const commentValid = comment.trim().length > 0;

  const commentSubmit = e => {
    e.preventDefault();
    return commentValid
      ? (setComments(prev => [comment, ...prev]), setComment(''))
      : setComments(comments);
  };

  return (
    <div className="feedsContainer">
      <div className="feedsHeader">
        <img
          src="https://images.unsplash.com/photo-1660296422801-6b585af5df9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8SnBnNktpZGwtSGt8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=60"
          alt={altMsg}
        />
        <span>jiwony99333</span>
      </div>
      <img
        className="feedImage"
        src="https://images.unsplash.com/photo-1660811136321-c73f03714c81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
        alt={altMsg}
      />
      <div className="reactionIcons">
        <div className="reactionIconsLeft">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
            alt={altMsg}
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/7205/7205744.png"
            alt={altMsg}
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/2956/2956783.png"
            alt={altMsg}
          />
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
          <span className="commentId">jiwon.kim</span>
          <span className="commentSaying">
            여행가서 찍은 사진 올려 봅니다...
          </span>
        </li>
        {comments.map((value, index) => (
          <Comment item={value} key={index} />
        ))}
        <span className="timePassed">0초 전</span>
      </ul>
      <form className="commentInputBox" onSubmit={commentSubmit}>
        <input
          className="commentInput"
          placeholder="댓글 쓰기..."
          onChange={handleCommentChange}
          value={comment}
        />
        <button>게시</button>
      </form>
    </div>
  );
};

export default Feeds;
