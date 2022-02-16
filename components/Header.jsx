import React, { useState, useEffect } from "react";
import navItems from "../json/navItems.json";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const listener = document.addEventListener("scroll", () => {
      setHasScrolled(window.scrollY > 100);
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <>
      <header
        className={`Header transition duration-200 bg-blacked sm:py-5 py-3 fixed left-0 right-0 top-0 z-50 ${
          hasScrolled && !isMenuOpen ? "opacity-70" : ""
        } hover:opacity-100`}
      >
        <div className="wrapper flex justify-center items-center">
          <big
            className="flex items-center font-bold text-white cursor-pointer"
            onClick={() => {
              if (typeof window === "undefined") return;
              window.scrollTo(0, 0);
              history.replaceState({}, null, "/");
            }}
          >
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
                  <span className="lsmall text-pink">{navItem.name}</span>
                </div>
              ))}
            </nav>
            <div className="NavDivider" />

            <div className="flex">
              <div className="flex flex-col mr-1">
                <span className="text-xs">Coming soon</span>
                <span className="lsmall text-pink">Profile</span>
              </div>

              <Image height={38} width={38} src="/images/IconCE.svg" alt="" />
            </div>
          </div>

          {/* menu burger */}
          <div className="lg:hidden flex ml-auto">
            <div className={`${isMenuOpen ? "flex" : "hidden"}`}>
              <Image
                height={18}
                width={18}
                className="cursor-pointer"
                src="/images/VectorCrossColor.svg"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
                alt=""
              />
            </div>
            <div className={`${isMenuOpen ? "hidden" : "flex"}`}>
              <Image
                height={15.76}
                width={22.76}
                className="cursor-pointer"
                src="/images/VectorMenu.svg"
                onClick={() => {
                  setIsMenuOpen(true);
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
        } lg:hidden fixed bg-dark transition duration-200 top-0 left-0 right-0 bottom-0 bg-white z-20 transform`}
      >
        <div className="wrapper flex flex-col justify-center text-white h-full">
          <div className="w-full py-3 flex justify-between items-center">
            <div>
              <div>
                <span
                  className="whiteHoverFill"
                  style={{ fontSize: "22px", lineHeight: "22px" }}
                >
                  Profile
                </span>
              </div>
              <div
                style={{
                  marginTop: "2px",
                  fontSize: "18px",
                  lineHeight: "18px",
                }}
              >
                coming soon
              </div>
            </div>

            <Image height={38} width={38} src="/images/IconCE.svg" alt="" />
          </div>

          <div
            className="w-full bg-divider mb-1"
            style={{ height: "1px" }}
          ></div>

          {navItems.map((navItem, index) => (
            <div className="w-full py-3" key={`mobNavItem${index}`}>
              <div>
                <span
                  className="whiteHoverFill"
                  style={{ fontSize: "22px", lineHeight: "22px" }}
                >
                  {navItem.name}
                </span>
              </div>
              <div style={{ marginTop: "2px", fontSize: "18px" }}>
                coming soon
              </div>
            </div>
          ))}

          <div className="h-full flex flex-col justify-end">
            <hr className="MintBox__Divider" />

            <div
              className="my-6"
              style={{ fontSize: "22px", lineHeight: "22px" }}
            >
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
