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

  const goToMain = () => {
    navigate('/main-nara');
  };

  function saveUserInput(e) {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  }

  return (
    <section className="login_main">
      <form className="login_form">
        <h1 className="title">Westagram</h1>
        <div className="login_input">
          <input
            name="id"
            className="input_style"
            onChange={saveUserInput}
            type="password"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            name="pw"
            className="input_style"
            onChange={saveUserInput}
            type="password"
            placeholder="비밀번호"
          />
          <input
            className="login_btn"
            onClick={goToMain}
            type="submit"
            value="로그인"
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
