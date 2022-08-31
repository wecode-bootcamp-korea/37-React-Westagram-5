const StoryUploadUser = ({ users }) => {
  const altMsg = '이미지 오류';
  return (
    <div className="storyUploadUserContainer">
      <img className="storyUploadUserImg" src={users.userImage} alt={altMsg} />
      <div className="storyUploadUserInfo">
        <span>{users.userName}</span>
        <span>{users.userDescription}</span>
      </div>
    </div>
  );
};

export default StoryUploadUser;
