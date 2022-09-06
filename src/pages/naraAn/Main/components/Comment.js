import React from 'react';

function Comment({ props }) {
  return (
    <li>
      <span className="user_name">{props.id}</span>
      <span className="comment_style">{props.item}</span>
    </li>
  );
}
export default Comment;
