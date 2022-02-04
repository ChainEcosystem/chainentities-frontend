import React from "react";

const Footer = () => {
  function redirectSocialLink(link) {
    if (typeof window === "undefined") {
      return;
    }
    window.open(link, "_blank");
  }

  return (
    <footer>
      {/* CTA */}
      <div className="bg-dark text-center py-10">
        <h1 className="font-bold text-primary mb-6">
          Metaverse life is coming,
          <br />
          get Your access ticket.
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

      {/* Socials */}
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-3 grid-cols-1 items-center w-100 text-white py-6">
          <div className="col-span-1 flex sm:justify-start justify-center">
            <small className="sm:text-left text-center">
              Contacts: <br className="sm:hidden" />
              <a
                href="mailto:chainecosystem@gmail.com"
                className="transition duration-200 text-pink hover:text-white"
              >
                chainecosystem@gmail.com
              </a>
            </small>
          </div>

          <small className="sm:inline-block hidden col-span-1 text-center">
            All rights reserved.
          </small>

          <div className="col-span-1 flex sm:justify-end justify-center sm:mt-0 mt-5">
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
  );
};

export default Footer;
