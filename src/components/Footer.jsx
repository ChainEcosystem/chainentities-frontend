import React from "react";

const Footer = () => {
  return (
    <footer>
      {/* CTA */}
      <div>
        <div>Nothing is limited, except for data.</div>

        <button>Proceed to mint</button>
      </div>

      {/* Socials */}
      <div className="grid grid-cols-3">
        <div>Contacts: chainecosystem@gmail.com</div>
        <div>All rights reserved.</div>

        <div>
          <img src="/images/VectorTelegram.svg" alt="" />

          <img src="/images/VectorTwitter.svg" alt="" />

          <img src="/images/VectorInstagram.svg" alt="" />

          <img src="/images/VectorDiscord.svg" alt="" />
        </div>
      </div>

      {/* Brand name */}
      <div>ChainEntities</div>
    </footer>
  );
};

export default Footer;
