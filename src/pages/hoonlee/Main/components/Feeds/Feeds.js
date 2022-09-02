import React from 'react';
import ArticleHeader from './components/ArticleHeader';
import ArticleCommentInput from './components/ArticleCommentInput';
import ArticleCommentList from './components/ArticleCommentList';
import ArticleBody from './components/ArticleBody';
import ArticleFooter from './components/ArticleFooter';
import ArticleLike from './components/ArticleLike';

function Feeds({
  comments,
  commentsForComponent,
  commentSubmitHandler,
  commentInputReference,
  deleteBtnHandelr,
  likeBtnHandler,
}) {
  return (
    <div className="feeds">
      <div className="article" id="article0">
        <ArticleHeader />
        <ArticleBody />
        <ArticleFooter />
        <ArticleLike />
        <ArticleCommentList
          comments={comments}
          commentsForComponent={commentsForComponent}
          deleteBtnHandelr={deleteBtnHandelr}
          likeBtnHandler={likeBtnHandler}
        />
        <ArticleCommentInput
          commentSubmitHandler={commentSubmitHandler}
          commentInputReference={commentInputReference}
        />
      </div>
    </div>
  );
}

export default Feeds;
