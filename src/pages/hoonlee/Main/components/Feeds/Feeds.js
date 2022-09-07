import React, { useEffect, useState } from 'react';
import Article from './components/Article/Article';

function Feeds({
  comments,
  commentsForComponent,
  commentSubmitHandler,
  commentInputReference,
  deleteBtnHandelr,
  likeBtnHandler,
}) {
  const [feedsData, setFeedsData] = useState([]);

  useEffect(() => {
    fetch('./data/feeds/feeds.json')
      .then(response => response.json())
      .then(data => {
        data.map((value, index) => (comments[index] = value.comments));
        setFeedsData(data);
      });
  }, []);

  return (
    <div className="feeds">
      {feedsData.map((userData, index) => {
        return (
          <Article
            comments={comments}
            commentsForComponent={commentsForComponent}
            commentSubmitHandler={commentSubmitHandler}
            commentInputReference={commentInputReference}
            deleteBtnHandelr={deleteBtnHandelr}
            likeBtnHandler={likeBtnHandler}
            userId={userData.userId}
            userImage={userData.userImage}
            bodyImage={userData.bodyImage}
            feedIndex={index}
            key={userData.bodyImage}
          />
        );
      })}
    </div>
  );
}

export default Feeds;
