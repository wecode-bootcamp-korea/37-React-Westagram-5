import React from 'react';

function MainRightStory() {
  return (
    <div className="main_right_story">
      <div className="story_title">
        <p>스토리</p>
        <p>모두보기</p>
      </div>
      {USER_LIST.map(value => {
        return (
          <div className="story_user" key={value.id}>
            <img
              alt="사용자 프로필 이미지"
              src={value.src}
              className="user_img"
            />
            <div className="user_data">
              <span className="user_name">{value.name}</span>
              <p className="time">{value.time}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default MainRightStory;

const USER_LIST = [
  {
    id: 1,
    src: '/images/naraAn/profile/tomung.jpeg',
    name: 'nariiiii',
    time: '3분전',
  },
  {
    id: 2,
    src: '/images/naraAn/profile/dog1.jpg',
    name: '_juhyunii',
    time: '12분전',
  },
  {
    id: 3,
    src: '/images/naraAn/profile/dog3.jpg',
    name: 'miiisun4',
    time: '33분전',
  },
  {
    id: 4,
    src: '/images/naraAn/profile/dog2.jpg',
    name: 'jungmin_12',
    time: '1시간전',
  },
];
