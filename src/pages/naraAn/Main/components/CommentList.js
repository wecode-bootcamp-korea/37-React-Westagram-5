import React from 'react';
import Comment from './Comment';

function CommentList(props) {
  return (
    <>
      {props.container.map((item, index) => (
        <Comment key={index} text={item} />
      ))}
    </>
  );
}
export default CommentList;
