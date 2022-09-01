import React, { useState, useRef } from 'react';
import Nav from './components/Nav/Nav';
import SearchBox from './components/SearchBox';
import Feeds from './components/Feeds/Feeds';
import MainRight from './components/MainRight/MainRight';
import './Main.scss';

function MainHoon() {
  const [comments, setComments] = useState([]);
  const [commentsForComponent, setcommentsForComponent] = useState([]);
  const commentInputReference = useRef();
  const currentUser = 'noon_noo_nan_na';
  let newcommentsForComponent = [];

  const commentSubmitHandler = event => {
    event.preventDefault();
    const commentsCopied = comments;
    const comment = {};

    comment.User = currentUser;
    comment.Text = commentInputReference.current.value;
    comment.Like = false;

    setComments([...comments, comment]);

    commentInputReference.current.value = '';
  };

  const deleteBtnHandelr = event => {};

  console.log(comments);

  return (
    <>
      <Nav />
      <main>
        <SearchBox />
        <Feeds
          comments={comments}
          commentsForComponent={commentsForComponent}
          commentSubmitHandler={commentSubmitHandler}
          commentInputReference={commentInputReference}
          deleteBtnHandelr={deleteBtnHandelr}
        />
        <MainRight />
      </main>
    </>
  );
}

export default MainHoon;
