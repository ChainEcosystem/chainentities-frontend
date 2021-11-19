import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function redirectSocialLink(link) {
    window.open(link, "_blank");
  }

  return (
    <>
      <header className="bg-blacked sm:py-5 py-3 relative z-50">
        <div className="container flex mx-auto justify-center items-center">
          <p className="md:hidden">
            ChainEntities<span className="text-pink">.</span>
          </p>

          <img
            src={`/images/${
              isMenuOpen ? "VectorCrossColor" : "VectorMenu"
            }.svg`}
            onClick={() => {
              setIsMenuOpen((open) => !open);
            }}
            className="md:hidden ml-auto"
            alt=""
          />

          <small className="md:inline-block hidden text-white">
            ChainEntities<span className="text-pink">.</span>
          </small>

          <div className="md:flex hidden flex-grow justify-end items-center">
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

      {/* Mobile nav  */}
      <nav
        className={`md:hidden absolute bg-dark py-3 px-2 transition duration-200 w-full h-full bg-white z-20 transform -translate-y-${
          isMenuOpen ? "0" : "full"
        }`}
      >
        <div className="container mx-auto flex flex-col justify-center text-white">
          <div
            className="w-full py-3 flex items-center"
            onClick={() => {
              redirectSocialLink("https://discord.gg/5qRS9KThV2");
            }}
          >
            <img
              className="SocialIcon NavItemSpacing"
              src="/images/VectorDiscord.svg"
              alt=""
            />
            <p>Discord</p>
          </div>

          <div
            className="w-full py-3 flex items-center"
            onClick={() => {
              redirectSocialLink("https://twitter.com/ChainEntities");
            }}
          >
            <img
              className="SocialIcon NavItemSpacing"
              src="/images/VectorTwitter.svg"
              alt=""
            />
            <p>Twitter</p>
          </div>

          <div
            className="w-full py-3 flex items-center"
            onClick={() => {
              redirectSocialLink("https://t.me/joinchat/ak0ckrBeURpmNzgy");
            }}
          >
            <img
              className="SocialIcon NavItemSpacing"
              src="/images/VectorTelegram.svg"
              alt=""
            />

            <p>Telegram</p>
          </div>

          <div
            className="w-full py-3 flex items-center"
            onClick={() => {
              redirectSocialLink("https://www.instagram.com/chainentities/");
            }}
          >
            <img
              className="SocialIcon NavItemSpacing"
              src="/images/VectorInstagram.svg"
              alt=""
            />
            <p>Instagram</p>
          </div>

          <hr className="MintBox__Divider" />

          <p className="pt-3">
            Contacts:{" "}
            <a
              href="mailto:chainecosystem@gmail.com"
              className="transition duration-200 text-pink hover:text-white"
            >
              chainecosystem@gmail.com
            </a>
          </p>
        </div>
      </nav>
    </>
  );
};

export default Header;
