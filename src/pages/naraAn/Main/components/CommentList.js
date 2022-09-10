import React from 'react';
import Comment from './Comment';

function CommentList(props) {
  const { container } = props;
  return (
    <div className="comment_list">
      {container.map(value => (
        <Comment key={value.key} item={value.item} id={value.id} />
      ))}
    </div>
  );
}
export default CommentList;
