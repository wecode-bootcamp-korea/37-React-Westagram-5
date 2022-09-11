import React from 'react';
const USER_LIST = [
  {
    id: 1,
    src: '/images/naraAn/profile/minions.jpg',
    name: 'minions',
    follow: '_juhyunii님 외 2명이...',
  },
  {
    id: 2,
    src: '/images/naraAn/profile/cat3.jpg',
    name: 'zip.nyang.2',
    follow: 'jungmin_1님 외 1명이...',
  },
  {
    id: 3,
    src: '/images/naraAn/profile/cat1.jpg',
    name: 'nyang_punch',
    follow: '_juhyunii님 외 3명이...',
  },
];

function MainRightRecommend() {
  return (
    <div className="main_right_recommend">
      <div className="recommend_title">
        <p>회원님을 위한 추천</p>
        <p>모두보기</p>
      </div>
      {USER_LIST.map(value => {
        return (
          <ul className="recommend_user" key={value.id}>
            <li>
              <img
                alt="사용자 프로필 이미지"
                src={value.src}
                className="user_img"
              />
            </li>
            <li className="user_data">
              <span className="user_name">{value.name}</span>
              <p>{value.follow}</p>
            </li>
            <li>
              <button>팔로우</button>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default MainRightRecommend;
