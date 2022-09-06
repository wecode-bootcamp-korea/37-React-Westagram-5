// Router.js

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// [팀별 레포 주소]
// 1팀: https://github.com/wecode-bootcamp-korea/37-React-Westagram-1
// 2팀: https://github.com/wecode-bootcamp-korea/37-React-Westagram-2
// 3팀: https://github.com/wecode-bootcamp-korea/37-React-Westagram-3
// 4팀: https://github.com/wecode-bootcamp-korea/37-React-Westagram-4
// 5팀: https://github.com/wecode-bootcamp-korea/37-React-Westagram-5
// 6팀: https://github.com/wecode-bootcamp-korea/37-React-Westagram-6

// 이승훈의 컴포넌트
import LoginHoon from './pages/hoonlee/Login/Login';
import MainHoon from './pages/hoonlee/Main/Main';
// 강루비의 컴포넌트
import LoginRubi from './pages/rubiKang/Login/Login';
import MainRubi from './pages/rubiKang/Main/Main';
// 김지원의 컴포넌트
import LoginJiwon from './pages/jiwonKim/Login/Login';
import MainJiwon from './pages/jiwonKim/Main/Main';
// 안나라의 컴포넌트
import LoginNara from './pages/naraAn/Login/Login';
import MainNara from './pages/naraAn/Main/Main';

// import 한 컴포넌트에 대한 경로를 각각 설정해줍니다.
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Team#5</h1>} />

        <Route path="/login-hoon" element={<LoginHoon />} />
        <Route path="/main-hoon" element={<MainHoon />} />

        <Route path="/login-Rubi" element={<LoginRubi />} />
        <Route path="/main-Rubi" element={<MainRubi />} />

        <Route path="/login-Jiwon" element={<LoginJiwon />} />
        <Route path="/main-Jiwon" element={<MainJiwon />} />

        <Route path="/login-Nara" element={<LoginNara />} />
        <Route path="/main-Nara" element={<MainNara />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
