import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Login.scss';

function LoginJiwon() {
  // sign up 회원가입
  const signUp = e => {
    e.preventDefault();
    fetch('http://10.58.0.33:3000/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        email: userInput.email,
        password: userInput.password,
      }),
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .then(alert('가입에 성공하였습니다'));
  };

  // sign in 로그인
  const signIn = e => {
    e.preventDefault();
    fetch('http://10.58.0.33:3000/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        email: userInput.email,
        password: userInput.password,
      }),
    })
      .then(res => res.json())
      .then(data =>
        data.accessToken
          ? (goToMain(), window.localStorage.setItem('token', data.accessToken))
          : alert('비밀번호가 잘못되었습니다!')
      );
  };

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

          <button className="loginButton" disabled={!isValid} onClick={signIn}>
            로그인
          </button>
          <button
            className="loginButton"
            style={{ backgroundColor: 'lightcoral' }}
            disabled={!isValid}
            onClick={signUp}
          >
            회원가입
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
