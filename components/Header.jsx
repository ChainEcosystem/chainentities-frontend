import React, { useState } from "react";
import navItems from "../json/navItems.json";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function redirectSocialLink(link) {
    if (typeof window === "undefined") {
      return;
    }
    window.open(link, "_blank");
  }

  return (
    <>
      <header className="Header bg-blacked sm:py-5 py-3 relative z-50">
        <div className="container flex mx-auto justify-center items-center">
          {/* Mobile Nav */}
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

          {/* Desktop nav */}
          <big className="md:inline-block hidden font-bold text-white">
            ChainEntities<span className="text-pink">.</span>
          </big>

          <div className="md:flex hidden flex-grow justify-end items-center">
            <div className="flex gap-8">
              {navItems.map((navItem, index) => (
                <div className="flex flex-col" key={`navItem${index}`}>
                  <span className="text-xs">Coming soon</span>
                  <small className="text-pink">{navItem.name}</small>
                </div>
              ))}
            </div>
            <div className="NavDivider" />

            <div className="flex gap-1">
              <div className="flex flex-col">
                <span className="text-xs">Coming soon</span>
                <small className="text-pink">Profile</small>
              </div>

              <img src="/images/CEIcon.png" alt="" />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile nav content */}
      <nav
        className={`MobileNav ${
          isMenuOpen && "MobileNav--activated"
        } md:hidden absolute bg-dark py-3 px-2 transition duration-200 w-full h-full bg-white z-20 transform`}
      >
        <div className="container mx-auto flex flex-col justify-center text-white">
          <div
            className="w-full py-3 flex items-center text-pink"
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
            className="w-full py-3 flex items-center text-pink"
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
            className="w-full py-3 flex items-center text-pink"
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
            className="w-full py-3 flex items-center text-pink"
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
