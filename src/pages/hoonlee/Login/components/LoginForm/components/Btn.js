import React from 'react';

function Btn({ goToMain, isLoginBtnDisable, loginRequest }) {
  // console.log('isLoginBtnDisable : ', isLoginBtnDisable);

  const BtnClassName =
    isLoginBtnDisable === true ? 'buttonDisable' : 'buttonAble';
  return (
    <button
      onClick={loginRequest}
      disabled={isLoginBtnDisable}
      className={BtnClassName}
    >
      로그인
    </button>
  );
}

export default Btn;
