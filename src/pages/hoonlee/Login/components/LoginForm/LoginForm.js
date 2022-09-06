import React from 'react';
import Btn from './components/Btn';

function LoginForm({
  saveUserId,
  inputId,
  saveUserPw,
  inputPw,
  goToMain,
  isLoginBtnDisable,
  usedInputHandler,
}) {
  return (
    <form className="inputBox" id="inputBox">
      <input
        id="idBox"
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        onChange={saveUserId}
        value={inputId}
      />
      <input
        id="passwordBox"
        type="password"
        placeholder="비밀번호"
        onChange={saveUserPw}
        value={inputPw}
      />
      <Btn goToMain={goToMain} isLoginBtnDisable={isLoginBtnDisable} />
    </form>
  );
}

export default LoginForm;
