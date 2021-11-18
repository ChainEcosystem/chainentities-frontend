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
          <small className="text-pink mr-5">The story</small>
          <small className="text-pink mr-5">Roadmap</small>
          <small className="text-pink mr-5">Team</small>
          <small className="text-pink">FAQ</small>

          <div className="NavDivider mx-5" />

          <img
            className="SocialIcon mr-5"
            src="/images/VectorTelegram.svg"
            alt=""
            onClick={() => {
              redirectSocialLink("https://t.me/joinchat/ak0ckrBeURpmNzgy");
            }}
          />

          <img
            className="SocialIcon mr-5"
            src="/images/VectorTwitter.svg"
            alt=""
            onClick={() => {
              redirectSocialLink("https://twitter.com/ChainEntities");
            }}
          />

          <img
            className="SocialIcon mr-5"
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
