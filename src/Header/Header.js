import React from "react";
import HeaderOption from "../HeaderOption/HeaderOption";

function Header() {
  return (
    <div className="header">
      <div className="header__top">
        <div className="header__left">
          <img
            src="https://i.pinimg.com/originals/b3/69/c7/b369c7454adc03bfea8c6b2f4268be5a.png"
            alt=""
          />
        </div>
        <div className="header__right">
          <HeaderOption title="Home" />
          <HeaderOption title="Listen" />
          <HeaderOption title="Fantasy" />
          <HeaderOption Icon={} />
          <HeaderOption Icon={} />
          <HeaderOption Icon={} />
        </div>
      </div>
      <div className="header__bottom"></div>
    </div>
  );
}

export default Header;
