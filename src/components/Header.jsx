import React from "react";

const Header = () => {
  function redirectSocialLink(link) {
    window.open(link, "_blank");
  }

  return (
    <header className="bg-blacked py-5">
      <div className="container flex mx-auto justify-center items-center">
        <small className="text-white">
          ChainEntities<span className="text-pink">.</span>
        </small>

        <div className="flex-grow flex justify-end items-center">
          <a
            href="#story"
            className="text-pink flex justify-center items-center transition duration-200 hover:text-white NavItemSpacing"
          >
            <small>The story</small>
          </a>
          <a
            href="#roadmap"
            className="text-pink flex justify-center items-center transition duration-200 hover:text-white NavItemSpacing"
          >
            <small>Roadmap</small>
          </a>
          <a
            href="#team"
            className="text-pink flex justify-center items-center transition duration-200 hover:text-white NavItemSpacing"
          >
            <small>Team</small>
          </a>
          <a
            href="#faq"
            className="text-pink flex justify-center items-center transition duration-200 hover:text-white"
          >
            <small>FAQ</small>
          </a>

          <div className="NavDivider" />

          <img
            className="SocialIcon NavItemSpacing"
            src="/images/VectorTelegram.svg"
            alt=""
            onClick={() => {
              redirectSocialLink("https://t.me/joinchat/ak0ckrBeURpmNzgy");
            }}
          />

          <img
            className="SocialIcon NavItemSpacing"
            src="/images/VectorTwitter.svg"
            alt=""
            onClick={() => {
              redirectSocialLink("https://twitter.com/ChainEntities");
            }}
          />

          <img
            className="SocialIcon NavItemSpacing"
            src="/images/VectorInstagram.svg"
            alt=""
            onClick={() => {
              redirectSocialLink("https://www.instagram.com/chainentities/");
            }}
          />

          <img
            className="SocialIcon"
            src="/images/VectorDiscord.svg"
            alt=""
            onClick={() => {
              redirectSocialLink("https://discord.gg/5qRS9KThV2");
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
