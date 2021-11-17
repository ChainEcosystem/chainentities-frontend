import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container w-100 flex mx-auto">
        <span>ChainEntities</span>

        <div className="flex-grow flex justify-end">
          <span>nav item</span>
          <span>nav item</span>
          <span>nav item</span>
          <span>nav item</span>
          <span>|</span>
          <span>
            <img src="/images/VectorTelegram.svg" alt="" />
          </span>

          <span>
            <img src="/images/VectorTwitter.svg" alt="" />
          </span>

          <span>
            <img src="/images/VectorInstagram.svg" alt="" />
          </span>

          <span>
            <img src="/images/VectorDiscord.svg" alt="" />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
