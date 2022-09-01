import React from 'react';

function MainRightHeader(props) {
  return (
    <div className="main-right_header">
      <img src="./images/hoonlee/wecode.png" alt="위코드이미지" />
      <div className="main-right_header_comment">
        <div className="main-right_header_comment_top">wecode_bootcamp</div>
        <div className="main-right_header_comment_bottom">
          <div className="main-right_header_comment_bottom_Eng">Wecode</div>
          <div className="main-right_header_comment_bottom_Kor">위코드</div>
        </div>
      </div>
    </div>
  );
}

export default MainRightHeader;
