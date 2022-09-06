import React from 'react';
const USER_LIST = [
  {
    id: 1,
    alt: 'minions',
    src: '../../../../../images/naraAn/profile/minions.jpg',
    name: 'minions',
    follow: '_juhyunii님 외 2명이...',
  },
  {
    id: 2,
    alt: 'cat',
    src: '../../../../../images/naraAn/profile/cat3.jpg',
    name: 'zip.nyang.2',
    follow: 'jungmin_12님 외 1명이...',
  },
  {
    id: 3,
    alt: 'cat',
    src: '../../../../../images/naraAn/profile/cat1.jpg',
    name: 'nyang_punch',
    follow: '_juhyunii님 외 3명이...',
  },
];

function RecommendUser() {
  return (
    <>
      {USER_LIST.map(value => {
        return (
          <ul className="recommend_user" key={value.id}>
            <li>
              <img alt={value.alt} src={value.src} className="user_img" />
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
    </>
  );
}

export default RecommendUser;

// // return (
//   <ul className="recommend_user">
//     <li>
//       <img
//         alt="minions"
//         src="../../../../images/naraAn/profile/minions.jpg"
//         className="user_img"
//       />
//     </li>
//     <li className="user_data">
//       <span className="user_name">minions</span>
//       <p>_juhyunii님 외 2명이...</p>
//     </li>
//     <li>
//       <button>팔로우</button>
//     </li>
//   </ul>
// // );
