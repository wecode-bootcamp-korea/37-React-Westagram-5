import StoryUploadUser from './StoryUploadUser';
const MainRight = () => {
  return (
    <div className="mainRightContainer">
      <div className="mainRightProfile">
        <img
          src="https://images.unsplash.com/photo-1660144767359-56a53fe44310?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=985&q=80"
          alt={altMsg}
        />
        <div className="mainRightUserInfo">
          <span>jiwon.kim</span>
          <span>김지원 | 안녕하세요</span>
        </div>
      </div>
      <div className="story">
        <div className="boxTitle">
          <span>스토리</span>
          <span>모두보기</span>
        </div>
        <div className="storyUploadUserWrap">
          {STORY_USERS.map(item => (
            <StoryUploadUser users={item} key={item.id} />
          ))}
        </div>
      </div>
      <div className="recommend">
        <div className="boxTitle">
          <span>회원님을 위한 추천</span>
          <span>모두보기</span>
        </div>
        <div className="recommendedUser">
          <div className="recommendedUserLeft">
            <img
              className="recommendedUserImg"
              src="https://images.unsplash.com/photo-1514993805013-c428d7f63ad4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              alt={altMsg}
            />
            <div className="recommendedUserInfo">
              <span>gdragon</span>
              <span>jennie님 외 2명이 팔로우 하고 있습니다</span>
            </div>
          </div>
          <span className="recommendedUserFollow">팔로우</span>
        </div>
      </div>
      <div className="mainRightFooter">
        {FOOTER_MENU.map(item => (
          <span key={item.id}>{item.content} ・ </span>
        ))}
        <p>&copy;2022 INSTAGRAM</p>
      </div>
    </div>
  );
};

export default MainRight;

const altMsg = '이미지오류';

const STORY_USERS = [
  {
    id: 1,
    userName: 'jiwon',
    userDescription: '안녕하세요',
    userImage:
      'https://images.unsplash.com/photo-1514993805013-c428d7f63ad4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  },
  {
    id: 2,
    userName: 'nahyun',
    userDescription: '헬로 난 나현',
    userImage:
      'https://images.unsplash.com/photo-1514993805013-c428d7f63ad4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  },

  {
    id: 3,
    userName: 'jaetjd',
    userDescription: '팔로우 해주세요',
    userImage:
      'https://images.unsplash.com/photo-1514993805013-c428d7f63ad4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  },

  {
    id: 4,
    userName: 'jiyoon',
    userDescription: '버티고개 살아요',
    userImage:
      'https://images.unsplash.com/photo-1514993805013-c428d7f63ad4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  },

  {
    id: 5,
    userName: 'nayeon',
    userDescription: '안녕하세요 반갑습니다',
    userImage:
      'https://images.unsplash.com/photo-1514993805013-c428d7f63ad4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  },

  {
    id: 6,
    userName: 'zzomi',
    userDescription: '저는 강아지에요',
    userImage:
      'https://images.unsplash.com/photo-1514993805013-c428d7f63ad4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  },
];

const FOOTER_MENU = [
  { id: 1, content: 'Instagram 정보' },
  { id: 2, content: '지원' },
  { id: 3, content: '홍보센터' },
  { id: 4, content: '채용정보' },
  { id: 5, content: '개인정보처리방침' },
  { id: 6, content: '약관' },
  { id: 7, content: '디렉터리' },
  { id: 8, content: '프로필' },
  { id: 9, content: '해시태그' },
  { id: 10, content: '언어' },
];
