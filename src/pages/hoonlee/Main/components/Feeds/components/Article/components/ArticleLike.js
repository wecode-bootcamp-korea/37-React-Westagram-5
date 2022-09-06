import React from 'react';

function ArticleLike(props) {
  return (
    <div className="article_like">
      <img src="./images/hoonlee/univ.jpeg" alt="" />
      <div className="article_like_comment">
        <span className="id">hoon</span>님 외{' '}
        <span className="number">10명</span>이 좋아합니다
      </div>
    </div>
  );
}

export default ArticleLike;
