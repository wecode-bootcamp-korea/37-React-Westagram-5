import React from 'react';

function ArticleHeader({ userId, userImage }) {
  return (
    <div className="article_header">
      <img src={userImage} alt="프로필사진" />
      <div className="identifier">{userId}</div>
    </div>
  );
}

export default ArticleHeader;
