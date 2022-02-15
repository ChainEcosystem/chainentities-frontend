import React, { useState } from "react";
import navItems from "../json/navItems.json";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="Header bg-blacked sm:py-5 py-3 relative z-50">
        <div className="wrapper flex justify-center items-center">
          <big className="flex items-center font-bold text-white">
            <div className="mt-1 mr-3">
              <Image height={40} width={40} src="/images/Logo.svg" alt="" />
            </div>
            <span>
              ChainEntities<span className="text-pink">.</span>
            </span>
          </big>

          {/* Desktop nav content*/}
          <div className="lg:flex hidden flex-grow justify-end items-center">
            <nav className="flex gap-8">
              {navItems.map((navItem, index) => (
                <div className="flex flex-col" key={`navItem${index}`}>
                  <span className="text-xs">Coming soon</span>
                  <small className="text-pink">{navItem.name}</small>
                </div>
              ))}
            </nav>
            <div className="NavDivider" />

            <div className="flex">
              <div className="flex flex-col mr-1">
                <span className="text-xs">Coming soon</span>
                <small className="text-pink">Profile</small>
              </div>

              <Image height={38} width={38} src="/images/IconCE.svg" alt="" />
            </div>
          </div>

          {/* menu burger */}
          <div className="lg:hidden ml-auto">
            <div className="w-10 h-10 relative cursor-pointer">
              <Image
                layout="fill"
                src={`/images/${
                  isMenuOpen ? "VectorCrossColor" : "VectorMenu"
                }.svg`}
                onClick={() => {
                  setIsMenuOpen((open) => !open);
                }}
                alt=""
              />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile nav content */}
      <div
        className={`MobileNav ${
          isMenuOpen && "MobileNav--activated"
        } lg:hidden absolute bg-dark transition duration-200 w-full h-full bg-white z-20 transform`}
      >
        <div className="wrapper flex flex-col justify-center text-white h-full">
          <div className="w-full py-3 flex justify-between items-center">
            <div>
              <div>
                <span className="whiteHoverFill lsmall">Profile</span>
              </div>
              <div className="xsmall" style={{ marginTop: "2px" }}>
                coming soon
              </div>
            </div>

            <Image height={38} width={38} src="/images/IconCE.svg" alt="" />
          </div>

          {navItems.map((navItem, index) => (
            <div className="w-full py-3" key={`mobNavItem${index}`}>
              <div>
                <span className="whiteHoverFill lsmall">{navItem.name}</span>
              </div>
              <div className="xsmall" style={{ marginTop: "2px" }}>
                coming soon
              </div>
            </div>
          ))}

          <div className="h-full flex flex-col justify-end">
            <hr className="MintBox__Divider" />

            <div className="my-6 lsmall">
              Contacts:{" "}
              <a
                href="mailto:chainecosystem@gmail.com"
                className="transition duration-200 text-pink hover:text-white"
              >
                chainecosystem@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
