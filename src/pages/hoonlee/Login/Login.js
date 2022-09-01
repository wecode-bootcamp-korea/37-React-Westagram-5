import { React, useRef, useState } from 'react';
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
        />
        <Link to="">비밀번호를 잊으셨나요?</Link>
      </div>
      <div className="blank" />
    </div>
  );
}

export default LoginHoon;
