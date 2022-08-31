import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../../styles/reset.scss';
import '../../../styles/common.scss';

import './Login.scss';

function LoginJiwon() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-jiwon');
  };

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const saveUserId = e => {
    setId(e.target.value);
  };

  const saveUserPw = e => {
    setPw(e.target.value);
  };
  const isValid = id.includes('@') && pw.length >= 5;

  return (
    <div className="loginBody">
      <div className="loginContainer">
        <div className="loginLogoSpace">
          <span>Westagram</span>
        </div>
        <form className="loginBox">
          <input
            className="input"
            id="id"
            type="email"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={saveUserId}
          />
          <input
            className="input"
            id="password"
            type="password"
            placeholder="비밀번호"
            onChange={saveUserPw}
          />

          <button
            className="loginButton"
            disabled={isValid ? false : true}
            onClick={goToMain}
          >
            로그인
          </button>
        </form>
        <div className="loginFooter">
          <a href="https://www.naver.com">
            <p>비밀번호를 잊으셨나요?</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginJiwon;
