import React from 'react';

function ArticleFooter(props) {
  return (
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
  );
}

export default ArticleFooter;
