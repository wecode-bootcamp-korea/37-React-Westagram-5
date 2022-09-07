import React from 'react';
import search from 'assets/rubiKang/search_ico.jpeg';

function NavCenter() {
  return (
    <div className="navCenter">
      <img className="searchImg" src={search} alt="돋보기" />
      <input
        id="navInput"
        className="navInput"
        type="text"
        placeholder="검색"
      />
    </div>
  );
}

export default NavCenter;
