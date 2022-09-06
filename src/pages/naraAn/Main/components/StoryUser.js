import React from 'react';

const USER_LIST = [
  {
    id: 1,
    alt: 'tomung',
    src: '../../../../../images/naraAn/profile/tomung.jpeg',
    name: 'nariiiii',
    time: '3분전',
  },
  {
    id: 2,
    alt: 'dog',
    src: '../../../../../images/naraAn/profile/dog1.jpg',
    name: '_juhyunii',
    time: '12분전',
  },
  {
    id: 3,
    alt: 'dog',
    src: '../../../../../images/naraAn/profile/dog3.jpg',
    name: 'miiisun4',
    time: '33분전',
  },
  {
    id: 4,
    alt: 'dog',
    src: '../../../../../images/naraAn/profile/dog2.jpg',
    name: 'jungmin_12',
    time: '1시간전',
  },
];

function StoryUser() {
  return (
    <>
      {USER_LIST.map(value => {
        return (
          <div className="story_user" key={value.id}>
            <img alt={value.alt} src={value.src} className="user_img" />
            <div className="user_data">
              <span className="user_name">{value.name}</span>
              <p className="time">{value.time}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default StoryUser;
