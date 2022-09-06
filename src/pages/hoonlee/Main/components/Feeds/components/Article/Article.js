import React from 'react';
import ArticleHeader from './components/ArticleHeader';
import ArticleCommentInput from './components/ArticleCommentInput';
import ArticleCommentList from './components/ArticleCommentList';
import ArticleFooter from './components/ArticleFooter';
import ArticleLike from './components/ArticleLike';
import ArticleBody from './components/ArticleBody';

function Article({
  comments,
  commentsForComponent,
  commentSubmitHandler,
  commentInputReference,
  deleteBtnHandelr,
  likeBtnHandler,
  userId,
  userImage,
  bodyImage,
  feedIndex,
}) {
  return (
    <div className="article" id={feedIndex}>
      <ArticleHeader userId={userId} userImage={userImage} />
      <ArticleBody bodyImage={bodyImage} />
      <ArticleFooter />
      <ArticleLike />
      <ArticleCommentList
        comments={comments[feedIndex]}
        commentsForComponent={commentsForComponent}
        deleteBtnHandelr={deleteBtnHandelr}
        likeBtnHandler={likeBtnHandler}
      />
      <ArticleCommentInput
        commentSubmitHandler={commentSubmitHandler}
        commentInputReference={commentInputReference}
      />
    </div>
  );
}

export default Article;
