import React from 'react';

function NavRight(props) {
  return (
    <div className="navRight">
      <img
        src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
        alt="탐색"
      />
      <img
        src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
        alt="하트"
      />
      <img
        className="modal"
        id="profileIcon"
        src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
        alt=""
      />
    </div>
  );
}

export default NavRight;
