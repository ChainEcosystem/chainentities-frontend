import React from "react";
import Image from "next/image";
import socials from "../json/socialMedia.json";

const Footer = () => {
  return (
    <div className="FooterSection relative">
      <div className="StarBg" />
      {/* CTA */}
      <div className="container mx-auto mb-10">
        <div className="bg-dark text-center py-10">
          <h1 className="font-bold text-primary mb-6">
            We - for the community,
            <br />
            community - for the future.
          </h1>

          <button
            className="btn-primary"
            onClick={() => {
              if (typeof window === "undefined") {
                return;
              }
              window.scrollTo({
                top: 0,
              });
            }}
          >
            Proceed to mint
          </button>
        </div>
      </div>

      <footer>
        <div className="bg-dark w-full" style={{ height: "1px" }} />
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-3 grid-cols-1 items-center w-100 text-white py-8">
            <div
              className="col-span-1 flex sm:justify-start justify-center"
              className="lsmall"
            >
              <div className="sm:text-left text-center whitespace-nowrap">
                Contacts:{" "}
                <a
                  href="mailto:chainecosystem@gmail.com"
                  className="transition duration-200 text-pink hover:text-white"
                >
                  chainecosystem@gmail.com
                </a>
              </div>
            </div>

            <div
              className="lsmall"
              className="sm:inline-block hidden col-span-1 text-center"
            >
              All rights reserved.
            </div>

            <div className="col-span-1 flex sm:justify-end justify-center sm:mt-0 mt-5 gap-7">
              {socials.map((social, index) => (
                <a
                  className="SocialIcon"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={social.link}
                  key={`footerSocial${index}`}
                >
                  <Image
                    height={20}
                    width={20}
                    src={`/images/Vector${social.name}.svg`}
                    alt=""
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Brand name */}
        <div className="py-3 bg-dark text-white">
          <div className="container mx-auto flex sm:justify-center justify-between text-center">
            <small>
              ChainEntities<span className="text-pink">.</span>
            </small>

            <small className="sm:hidden">All rights reserved.</small>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
