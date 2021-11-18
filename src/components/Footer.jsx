import React from "react";

const Footer = () => {
  function redirectSocialLink(link) {
    window.open(link, "_blank");
  }

  return (
    <footer className="pt-20">
      {/* CTA */}
      <div className="bg-dark text-center py-10">
        <h1 className="font-bold text-primary mb-6">
          Nothing is limited,
          <br />
          except for data.
        </h1>

        <button className="btn-primary">Proceed to mint</button>
      </div>

      {/* Socials */}
      <div className="container mx-auto flex justify-center items-center">
        <div className="grid grid-cols-3 justify-center items-center text-white  py-6">
          <small className="text-left ">
            Contacts:{" "}
            <a
              href="mailto:chainecosystem@gmail.com"
              className="transition duration-200 text-pink hover:text-white"
            >
              chainecosystem@gmail.com
            </a>
          </small>

          <small className="text-center">All rights reserved.</small>

          <div className="flex justify-end">
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
      </div>

      {/* Brand name */}
      <div className="py-3 text-center bg-dark text-white">
        <small>
          ChainEntities<span className="text-pink">.</span>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
