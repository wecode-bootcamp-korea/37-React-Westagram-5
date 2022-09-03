import React from 'react';
import Comment from './Comment';

function CommentList(props) {
  const { container } = props;
  return (
    <>
      {container.map((item, index) => (
        <Comment key={index} item={item} />
      ))}
    </>
  );
}
export default CommentList;
