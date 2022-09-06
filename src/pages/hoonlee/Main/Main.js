import React, { useState, useRef } from 'react';
import Nav from './components/Nav/Nav';
import SearchBox from './components/SearchBox';
import Feeds from './components/Feeds/Feeds';
import MainRight from './components/MainRight/MainRight';
import './Main.scss';
import { computeHeadingLevel } from '@testing-library/react';

function MainHoon() {
  const [comments, setComments] = useState([]);
  const commentInputReference = useRef();
  const currentUser = 'noon_noo_nan_na';

  const commentSubmitHandler = event => {
    event.preventDefault();
    const commentBox = {}; // 1. 유저가 작성한 댓글들의 정보를 모으기 위한 빈객체 생성
    const feedId = Number(event.nativeEvent.path[2].id); // 2. 게시글의 번호

    commentBox.User = currentUser;
    commentBox.Text = event.nativeEvent.path[1].children[0][0].value; // 엔터로 submit 하거나 "게시"를 클릭해도 부모를 한번 타고 공통된 값을 가져오기 위함.
    commentBox.Like = false;

    if (commentBox.Text.trim() === '') {
      alert('댓글을 입력하세요.');
    } else {
      if (comments[feedId] === undefined) comments[feedId] = []; // 3. 작성한 게시글의 댓글정보를 모으기위한 배열공간 생성
      comments[feedId].push(commentBox); // 4. 유저가 작성한 댓글정보를 데시글의 배열에  입력
      setComments([...comments]);
    }
    event.nativeEvent.path[1].children[0][0].value = '';
  };

  const deleteBtnHandelr = event => {
    const deletedCommentNumber = event.nativeEvent.path[2].id; // <- 댓글넘버
    const deletedFeedNumber = event.nativeEvent.path[4].id; // <- 게시글넘버

    comments[deletedFeedNumber].splice(deletedCommentNumber, 1);

    setComments([...comments]);
  };

  const likeBtnHandler = event => {
    const likedCommentNumber = event.nativeEvent.path[2].id; // <- 댓글넘버
    const likedFeedNumber = event.nativeEvent.path[4].id; // <- 게시글넘버

    comments[likedFeedNumber][likedCommentNumber].Like =
      !comments[likedFeedNumber][likedCommentNumber].Like;

    setComments([...comments]);
  };

  return (
    <>
      <Nav />
      <main>
        <SearchBox />
        <Feeds
          comments={comments}
          commentSubmitHandler={commentSubmitHandler}
          commentInputReference={commentInputReference}
          deleteBtnHandelr={deleteBtnHandelr}
          likeBtnHandler={likeBtnHandler}
        />
        <MainRight />
      </main>
    </>
  );
}

export default MainHoon;
