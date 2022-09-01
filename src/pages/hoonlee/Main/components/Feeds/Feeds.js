import React from 'react';
import ArticleCommentInput from './components/ArticleCommentInput';
import ArticleCommentList from './components/ArticleCommentList';

function Feeds({
  comments,
  commentsForComponent,
  commentSubmitHandler,
  commentInputReference,
  deleteBtnHandelr,
}) {
  return (
    <div className="feeds">
      <div className="article" id="article0">
        <div className="article_header">
          <img src="./images/hoonlee/profile.JPG" alt="프로필사진" />
          <div className="identifier">noon_noo_nan_na</div>
        </div>
        <div className="article_body">
          <img src="./images/hoonlee/body.JPG" alt="" />
        </div>
        <div className="article_footer">
          <div className="article_footer_left">
            <img src="./images/hoonlee/heart.png" alt="" />
            <img src="./images/hoonlee/chat.png" alt="" />
            <img src="./images/hoonlee/upload.png" alt="" />
          </div>
          <div className="article_footer_right">
            <img src="./images/hoonlee/save.png" alt="" />
          </div>
        </div>
        <div className="article_like">
          <img src="./images/hoonlee/univ.jpeg" alt="" />
          <div className="article_like_comment">
            <span className="id">hoon</span>님 외{' '}
            <span className="number">10명</span>이 좋아합니다
          </div>
        </div>
        <ArticleCommentList
          comments={comments}
          commentsForComponent={commentsForComponent}
          deleteBtnHandelr={deleteBtnHandelr}
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
