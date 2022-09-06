import React, { useEffect, useState } from 'react';

function MainRightFooter(props) {
  const [footerList, setFooterList] = useState([]);

  useEffect(() => {
    fetch('./data/mainRight/mainRightFooter.json')
      .then(response => response.json())
      .then(data => setFooterList(data));
  }, []);

  return (
    <div className="main-right_footer">
      <div className="main-right_footer_info">
        {footerList.map(value => {
          return <span key={value}> {value} ⚬</span>;
        })}

        {/* {['ads', 'adasdasd']} */}
        {/* Instagram 정보 ⚬ 지원 ⚬ 홍보 센터 ⚬ API ⚬ 채용정보 ⚬ 개인정보처리방침 ⚬
        약관 ⚬ 디렉터리 ⚬ 프로필 ⚬ 해시태그 ⚬ 언어 */}
      </div>
      <div className="main-right_footer_brand">© 2022 INSTAGRAM FROM META</div>
    </div>
  );
}

export default MainRightFooter;
