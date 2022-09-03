import React from 'react';

function Comment(props) {
  return (
    <li>
      <span className="user_name">wecode_37th</span>
      <span key={props.index} className="comment_style">
        {props.text}
      </span>
    </li>
  );
}
export default Comment;
