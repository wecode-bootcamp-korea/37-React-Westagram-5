import React, { useState } from 'react';
import '../Login/Login.scss';
import { Link } from 'react-router-dom';

function LoginRubi() {
  const [inputs, setInputs] = useState({
    userId: '',
    userPassword: '',
  });

  const { userId, userPassword } = inputs;

  const saveUser = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const [disabled, setDisabled] = useState(true);

  return (
    <div id="login-wrapper">
      <div className="login-content">
        <div className="header">
          <h1>Westagram</h1>
        </div>
        <div className="form-wrap">
          <form>
            <div className="box">
              <input
                type="text"
                id="user_id"
                name="userId"
                value={userId}
                onChange={saveUser}
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
            </div>
            <div className="box">
              <input
                type="password"
                id="user_pw"
                name="userPassword"
                value={userPassword}
                onChange={saveUser}
                placeholder="비밀번호"
              />
            </div>
            <div className="btn">
              <button type="submit" id="submit_btn" disabled={disabled}>
                로그인
              </button>
            </div>
          </form>
        </div>
        <div className="password-find">
          <Link to="/">비밀번호를 잊으셨나요?</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginRubi;
