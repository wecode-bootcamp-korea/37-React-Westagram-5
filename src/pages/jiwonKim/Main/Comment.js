import React from 'react';
import './Main.scss';

const Comment = ({ item }) => {
  return (
    <li className="comment">
      <span className="commentId">jiwon</span>
      <span className="commentSaying">{item}</span>
    </li>
  );
};

export default Comment;
