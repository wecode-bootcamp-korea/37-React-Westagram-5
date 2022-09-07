import { React, useState } from 'react';
import './Login.scss';
import { Link, useNavigate } from 'react-router-dom';
import LoginForm from './components/LoginForm/LoginForm';

function LoginHoon() {
  const navigate = useNavigate();
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

  const isLoginBtnDisable = !(
    inputId.indexOf('@') !== -1 && inputPw.length > 4
  );

  const goToMain = () => {
    navigate(`/main-hoon`);
  };

  const saveUserId = event => {
    setInputId(currentInputId => (currentInputId = event.target.value.trim()));
  };

  const saveUserPw = event => {
    setInputPw(currentInputPw => (currentInputPw = event.target.value.trim()));
  };

  // console.log('isLoginBtnDisable : ', isLoginBtnDisable);

  const joinRequest = event => {
    event.preventDefault();
    fetch('http://10.58.1.186:3000/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: 'hoon012@naver.com',
        password: 'hoohoon',
      }),
    }).then(response => {
      console.log(response.json());
    });
  };

  const loginRequest = event => {
    event.preventDefault();
    fetch('http://10.58.1.186:3000/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: 'hoon012@naver.com',
        password: 'hoohoon',
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.accessToken == undefined) {
          alert('실패');
        } else {
          alert('로그인 성공');
          const token = data.accessToken;
          localStorage.setItem('token', token);
          navigate(`/main-hoon`);
        }
      });
  };

  return (
    <div id="body">
      <div className="blank" />
      <div className="loginContainer">
        <h1 className="loginTitle">Hoonstagram</h1>
        <LoginForm
          saveUserId={saveUserId}
          inputId={inputId}
          saveUserPw={saveUserPw}
          inputPw={inputPw}
          goToMain={goToMain}
          isLoginBtnDisable={isLoginBtnDisable}
          loginRequest={loginRequest}
        />
        <Link onClick={joinRequest} to="">
          회원가입
        </Link>
        <Link to="">비밀번호를 잊으셨나요?</Link>
      </div>
      <div className="blank" />
    </div>
  );
}

export default LoginHoon;
