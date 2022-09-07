import React from 'react';
import logo from 'assets/rubiKang/instagram.png';

function NavLeft() {
  return (
    <div className="navLeft">
      <img className="instagramImg" src={logo} alt="인스타그램그림" />
      <h1 className="title">Wetagram</h1>
    </div>
  );
}

export default NavLeft;
