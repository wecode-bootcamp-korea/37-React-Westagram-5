import React from 'react';

function Comment({ id, item }) {
  return (
    <li>
      <span className="user_name">{id}</span>
      <span className="comment_style">{item}</span>
    </li>
  );
}
export default Comment;
