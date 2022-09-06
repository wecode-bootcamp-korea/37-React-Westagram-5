import React from 'react';

function MainRightRecommand(props) {
  return (
    <div className="main-right_recommand">
      <div className="main-right_recommand_header">
        <div className="main-right_recommand_title">회원님을 위한 추천</div>
        <div className="main-right_recommand_viewAll">모두 보기</div>
      </div>
      <div className="main-right_recommand_body">
        <div className="userInfo">
          <img src="./images/hoonlee/userImg/user9.JPG" alt="user1Img" />
          <div className="content">
            <div className="ID">hello_imHoon</div>
            <div className="commant">babong님 외 2명이 팔로우 하지롱</div>
          </div>
        </div>
        <div className="userInfo">
          <img src="./images/hoonlee/userImg/user8.JPG" alt="user1Img" />
          <div className="content">
            <div className="ID">wannaGo_toss</div>
            <div className="commant">boba님 외 4명이 팔로우 하지롱</div>
          </div>
        </div>
        <div className="userInfo">
          <img src="./images/hoonlee/userImg/user7.JPG" alt="user1Img" />
          <div className="content">
            <div className="ID">handsomeGuy</div>
            <div className="commant">anbabo님 외 2명이 팔로우 하지롱</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainRightRecommand;
