import React from 'react';

function Comment({ item }) {
  return (
    <li>
      <span className="user_name">wecode_37th</span>
      <span className="comment_style">{item}</span>
    </li>
  );
}
export default Comment;
