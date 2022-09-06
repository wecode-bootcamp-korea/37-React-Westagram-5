import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../../../styles/reset.scss';
import '../../../styles/common.scss';

import './Login.scss';

function LoginJiwon() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-jiwon');
  };

  const [userInput, setUserInput] = useState({ email: '', password: '' });

  const saveUserInput = e => {
    const { value, name } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const isValid =
    userInput.email.includes('@') && userInput.password.length >= 5;

  return (
    <div className="loginBody">
      <div className="loginContainer">
        <div className="loginLogoSpace">
          <span>Westagram</span>
        </div>
        <form className="loginBox">
          <input
            className="input"
            name="email"
            type="email"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={saveUserInput}
          />
          <input
            className="input"
            name="password"
            type="password"
            placeholder="비밀번호"
            onChange={saveUserInput}
          />

          <button
            className="loginButton"
            disabled={!isValid}
            onClick={goToMain}
          >
            로그인
          </button>
        </form>
        <div className="loginFooter">
          <Link to="!">
            <p>비밀번호를 잊으셨나요?</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginJiwon;
