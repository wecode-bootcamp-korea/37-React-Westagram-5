import React, { useState } from 'react';

function Btn({ goToMain, isLoginBtnDisable }) {
  console.log('isLoginBtnDisable : ', isLoginBtnDisable);

  const BtnClassName =
    isLoginBtnDisable === true ? 'buttonDisable' : 'buttonAble';
  return (
    <button
      onClick={goToMain}
      disabled={isLoginBtnDisable}
      className={BtnClassName}
    >
      로그인
    </button>
  );
}

export default Btn;
