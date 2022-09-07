import React, { useEffect, useState } from 'react';
import 'pages/rubiKang/Login/Login.scss';
import { Link, useNavigate } from 'react-router-dom';

function LoginRubi() {
  const navigate = useNavigate();

  const [disabled, setDisabled] = useState(true);
  const [inputs, setInputs] = useState({
    userId: '',
    userPassword: '',
  });
  const { userId, userPassword } = inputs;

  const saveUers = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const activeIsPassedLogin = () => {
    if (userId.includes('@') && userPassword.length >= 5) {
      setDisabled(false);
    } else if (userId === '' || userPassword.length < 5) {
      setDisabled(true);
    }
  };

  const goToMain = e => {
    e.preventDefault();

    fetch('http://10.58.2.86:3000/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: userId,
        password: userPassword,
        name: '테스트',
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);

        if (data.message === 'SUCCESS') {
          localStorage.setItem(data.userName, data.accessToken);
          navigate('/main-Rubi');
          alert('로그인 성공');
        } else if (data.message === 'FAIL') {
          alert('로그인 실패');
        }
      });

    // if (userId.includes('@') && userPassword.length >= 5) {
    //   navigate('/main-Rubi');
    // } else {
    //   alert('가입된 회원이 아닙니다. 회원가입을 먼저 해주세요.');
    // }
  };

  // useEffect(() => {
  //   fetch('https://10.58.2.25:3000/users/signup ', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: { userId },
  //       password: { userPassword },
  //     })
  //       .then(response => response.json())
  //       .then(data => console.log(data)),
  //   });
  // }, []);

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
                name="userId"
                value={userId}
                onKeyUp={activeIsPassedLogin}
                onChange={saveUers}
                id="user_id"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
            </div>
            <div className="box">
              <input
                type="password"
                name="userPassword"
                value={userPassword}
                onKeyUp={activeIsPassedLogin}
                onChange={saveUers}
                id="user_pw"
                placeholder="비밀번호"
              />
            </div>
            <div className="btn">
              <button
                type="submit"
                id="submit_btn"
                onClick={goToMain}
                disabled={disabled}
              >
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
