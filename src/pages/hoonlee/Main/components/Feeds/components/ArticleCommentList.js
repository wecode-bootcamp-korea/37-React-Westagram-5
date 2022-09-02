import React from 'react';

function ArticleCommentList({ comments, deleteBtnHandelr, likeBtnHandler }) {
  const newcommentsForComponent = [];
  let commentKey = 0;

  comments.forEach((value, index) => {
    newcommentsForComponent.push(
      <div id={index} key={commentKey}>
        <div id="userContent" className="userContent">
          <div id="user" className="user">
            {value.User}
          </div>
          <div id="content" className="content">
            {value.Text}
          </div>
        </div>
        <div className="likeDelete">
          <div id="deleteBtn" className="deleteBtn" onClick={deleteBtnHandelr}>
            DEL
          </div>
          <div id="likeBtn" className="likeBtn" onClick={likeBtnHandler}>
            {comments[index].Like === true ? '♥️' : '♡'}
          </div>
        </div>
      </div>
    );
    commentKey = commentKey + 1;
  });

  return (
    <div className="article_comment" id="article_comment">
      {newcommentsForComponent}
    </div>
  );
}

export default ArticleCommentList;
