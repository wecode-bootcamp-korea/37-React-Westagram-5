import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState({
    id: '',
    pw: '',
  });

  const isVaild =
    inputValues.id.includes('@') && inputValues.pw.length >= 5 ? false : true;

  const saveUserInput = e => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const signUp = e => {
    e.preventDefault();
    fetch('http://10.58.2.36:3001/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({ email: inputValues.id, password: inputValues.pw }),
    });
  };

  const login = e => {
    e.preventDefault();
    fetch('http://10.58.2.36:3001/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({ email: inputValues.id, password: inputValues.pw }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.accessToken) {
          alert('환영합니다!');
          localStorage.setItem('token', data.accessToken);
          navigate('/main-nara');
        } else if (data.message === 'INVALID_ID') {
          alert('아이디를 확인해주세요!');
        } else if (data.message === 'INVALID_PW') {
          alert('비밀번호를 확인해주세요!');
        }
      });
  };

  return (
    <section className="login">
      <form className="login_form">
        <h1 className="title">Westagram</h1>
        <div className="login_input">
          <input
            name="id"
            className="input_style"
            onChange={saveUserInput}
            type="text"
            value={inputValues.id}
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            name="pw"
            className="input_style"
            onChange={saveUserInput}
            type="password"
            value={inputValues.pw}
            placeholder="비밀번호"
          />
          <input
            className="login_btn"
            onClick={login}
            type="submit"
            value="로그인"
            disabled={isVaild}
          />
          <input
            className="login_btn"
            onClick={signUp}
            type="submit"
            value="회원가입"
            disabled={isVaild}
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
