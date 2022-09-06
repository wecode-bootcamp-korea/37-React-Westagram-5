import React from 'react';

function ArticleBody({ bodyImage }) {
  return (
    <div className="article_body">
      <img src={bodyImage} alt="" />
    </div>
  );
}

export default ArticleBody;
