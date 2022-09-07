import React, { useState } from 'react';
import 'pages/rubiKang/Main/Main.scss';
import Nav from 'components/Nav/Nav';
import profile from 'assets/rubiKang/cat.jpeg';
import thumb from 'assets/rubiKang/img1.jpg';
import heart from 'assets/rubiKang/1.png';
import comment_ico from 'assets/rubiKang/2-2.png';
import bookmark from 'assets/rubiKang/premium-icon-mark-5894523.png';

function MainRubi() {
  const [comment, setComment] = useState('');

  const comments = [{}];

  const handleChange = e => {
    setComment(e.target.value);
  };

  return (
    <>
      <Nav />
      <div className="feed-content">
        <div className="contain">
          <div className="fd-inner flex">
            <div className="feed-wrap">
              <div className="fd-top flex">
                <div className="user-id-box flex">
                  <span className="img">
                    <img src={profile} alt="프로필" />
                  </span>
                  <div className="id">rubi</div>
                </div>
                <div className="opt-btn" />
              </div>
              <div className="fd-tmb">
                <img src={thumb} alt="이미지" />
              </div>
              <div className="cont-box">
                <div className="fd-article-cont flex">
                  <div className="box">
                    <button className="heart-btn">
                      <img src={heart} alt="" className="off" />
                      {/* <img
                        src="../images/colorheart.png"
                        alt=""
                        className="on"
                      /> */}
                    </button>
                    <button>
                      <img src={comment_ico} alt="" />
                    </button>
                  </div>
                  <button>
                    <img src={bookmark} alt="" />
                  </button>
                </div>
                <div className="goods-like flex">
                  <span className="tmp">
                    <img src={profile} alt="" />
                  </span>
                  <div className="likes-info">
                    <span className="bold">rubi</span>님 외
                    <span className="bold">10명</span>이 좋아합니다.
                  </div>
                </div>
                <ul>
                  {comments.map(item => {
                    return item.name;
                  })}
                </ul>
                <div className="fd-txt flex">
                  <div className="id bold">rubi</div>
                  <div className="txt">좋아요 눌러주세요~</div>
                </div>
              </div>
              <div className="comment-form">
                <input
                  type="text"
                  value={comment}
                  onChange={handleChange}
                  placeholder="댓글 달기..."
                />
                <button type="submit" className="btn">
                  게시
                </button>
              </div>
            </div>
            <div className="info-inner" />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainRubi;
