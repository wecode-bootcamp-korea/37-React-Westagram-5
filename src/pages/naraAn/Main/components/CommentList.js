import React from 'react';
import Comment from './Comment';

function CommentList(props) {
  const { container } = props;
  return (
    <>
      {container.map(value => (
        <Comment key={value.key} item={value.item} />
      ))}
    </>
  );
}
export default CommentList;
