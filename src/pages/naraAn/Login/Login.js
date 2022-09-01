import React from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-nara');
  };

  const [id, userId] = useState('');
  function saveUserId(e) {
    userId(e.target.value);
  }

  const [pw, userPw] = useState('');
  function saveUserPw(e) {
    userPw(e.target.value);
  }
  return (
    <section className="login_main">
      <form className="login_form">
        <h1 className="title">Westagram</h1>
        <div className="login_input">
          <input
            className="input_style"
            onChange={saveUserId}
            id="id"
            type="password"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            className="input_style"
            onChange={saveUserPw}
            id="password"
            type="password"
            placeholder="비밀번호"
          />
          <input
            className="login_btn"
            onClick={goToMain}
            type="submit"
            value="로그인"
          />
        </div>
        <div className="find_password">
          <button>비밀번호를 잊으셨나요?</button>
        </div>
      </form>
    </section>
  );
};

export default Login;
