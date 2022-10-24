import React from "react";
import Image from "next/image";
import socials from "../json/socialMedia.json";
import Newsletter from "./landingPage/Newsletter";

const Footer = () => {
  return (
    <div className="FooterSection relative">
      <div className="StarBg" />
      {/* CTA */}
      <Newsletter />

      <footer>
        <div
          className="lg:block hidden bg-dark w-full"
          style={{ height: "2px" }}
        />
        <div className="wrapper">
          <div className="grid lg:grid-cols-3 grid-cols-1 items-center w-100 text-white py-8">
            <div
              className="col-span-1 flex lg:justify-start justify-center"
              style={{ fontSize: "22px", lineHeight: "22px" }}
            >
              <div className="lg:text-left text-center lg:whitespace-nowrap lsmall">
                Contacts: <br className="lg:hidden" />
                <a
                  href="mailto:chainecosystem@gmail.com"
                  className="transition duration-200 text-pink hover:text-white"
                >
                  chainecosystem@gmail.com
                </a>
              </div>
            </div>

            <div className="lg:inline-block hidden col-span-1 text-center lsmall">
              All rights reserved.
            </div>

            <div className="col-span-1 flex lg:justify-end justify-center lg:mt-0 mt-9 gap-7">
              {socials.map((social, index) => (
                <a
                  className="SocialIcon"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={social.link}
                  key={`footerSocial${index}`}
                >
                  <div className="lg:flex hidden">
                    <Image
                      height={20}
                      width={20}
                      src={`/images/Vector${social.name}.svg`}
                      alt=""
                    />
                  </div>

                  <div className="lg:hidden flex">
                    <Image
                      height={26}
                      width={26}
                      src={`/images/Vector${social.name}.svg`}
                      alt=""
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Brand name */}
        <div
          className="py-3 text-white lg:mt-0 mt-1"
          style={{ background: "rgba(38, 19, 43, 0.5)" }}
        >
          <div className="wrapper flex lg:justify-center justify-between text-center">
            <span className="lsmall">
              ChainEntities<span className="text-pink">.</span>
            </span>

            <small className="lg:hidden">All rights reserved.</small>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
