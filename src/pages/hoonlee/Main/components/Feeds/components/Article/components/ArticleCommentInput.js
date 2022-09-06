import React from 'react';

function ArticleCommentInput({ commentSubmitHandler, commentInputReference }) {
  return (
    <div className="article_comment_input">
      <form id="article_comment_input" onSubmit={commentSubmitHandler}>
        <input
          type="text"
          placeholder="댓글 달기.."
          ref={commentInputReference}
        />
      </form>
      <div
        className="article_comment_gesi"
        id="article_comment_gesi"
        onClick={commentSubmitHandler}
      >
        게시
      </div>
    </div>
  );
}

export default ArticleCommentInput;
