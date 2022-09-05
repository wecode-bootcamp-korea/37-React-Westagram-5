import React, { useState } from 'react';
import './Main.scss';

const Comment = ({ content, onClick }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <li className="comment">
      <span className="commentId">jiwon</span>
      <span className="commentSaying">{content}</span>
      <img
        src={
          isLiked
            ? 'https://cdn-icons-png.flaticon.com/512/2589/2589054.png' // 꽉찬하트
            : 'https://cdn-icons-png.flaticon.com/512/2589/2589197.png' // 빈하트
        }
        alt="하트"
        onClick={() => {
          setIsLiked(!isLiked);
        }}
      />
      <button onClick={onClick}> X </button>
    </li>
  );
};

export default Comment;
