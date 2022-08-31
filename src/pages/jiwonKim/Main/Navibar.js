import React from 'react';

const Navibar = () => {
  const altMsg = '이미지 오류';
  return (
    <div className="naviBarContainer">
      <div className="navLeft">
        <img
          className="icon"
          src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
          alt={altMsg}
        />
        <span>Westagram</span>
      </div>
      <input className="navInput" placeholder="검색" />
      <div className="navRight">
        <img
          className="icon"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
          alt={altMsg}
        />
        <img
          className="icon"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
          alt={altMsg}
        />
        <img
          className="icon"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
          alt={altMsg}
        />
        <img
          className="profileImg"
          src="https://images.unsplash.com/photo-1660144767359-56a53fe44310?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=985&q=80"
          alt={altMsg}
        />
      </div>
    </div>
  );
};

export default Navibar;
