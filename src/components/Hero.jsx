import React, { useState } from "react";

const Hero = () => {
  function redirectSocialLink(link) {
    window.open(link, "_blank");
  }

  const [mintCount, setMintCount] = useState(1);

  return (
    <section className="HeroSection grid grid-cols-5">
      <div className="col-span-3 flex flex-col justify-center pr-24">
        <h2 className="font-bold text-primary">
          ChainEntities make You styled
        </h2>
        <h1>Data's limited, rush for Your unique token</h1>

        <p className="mt-2">
          The time when everyone and everything lives on blockchain is here.
        </p>

        <div className="flex mt-5">
          <button
            className="btn-primary NavItemSpacing"
            onClick={() => {
              redirectSocialLink("https://discord.gg/5qRS9KThV2");
            }}
          >
            Opensea
          </button>
          <button
            className="btn-secondary"
            onClick={() => {
              redirectSocialLink("https://discord.gg/5qRS9KThV2");
            }}
          >
            Discord
          </button>
        </div>
      </div>

      <div className="col-span-2">
        <div className="MintBoxContainer">
          <div className="MintBox">
            <big className="block">ChainEntities Minted</big>
            {/* Minted count */}
            <h2 className="font-bold text-primary mt-3">0/4444</h2>

            <hr className="MintBox__Divider" />

            <big className="block">
              1 Entity costs <span className="text-blue">29</span> Matic
            </big>
            <small className="text-divider block mt-2">
              Excluding gas fees
            </small>

            <div className="flex items-center mt-6">
              <div className="MintCount">
                {/* Minus button */}
                <div
                  className="MintCount__Button"
                  onClick={() => {
                    setMintCount((prevCount) => {
                      if (prevCount <= 1) return prevCount;
                      return prevCount - 1;
                    });
                  }}
                >
                  <div className="MintCount__ButtonInner">
                    <big className="text-primary">-</big>
                  </div>
                </div>

                {/* Mint counter */}
                <div className="MintCount__Indicator">
                  <big>{mintCount}</big>
                </div>

                {/* Plus button */}
                <div
                  className="MintCount__Button"
                  onClick={() => {
                    setMintCount((prevCount) => prevCount + 1);
                  }}
                >
                  <div className="MintCount__ButtonInner">
                    <big className="text-primary">+</big>
                  </div>
                </div>
              </div>

              {/* Mint button */}
              <button className="MintBox__MintButton btn-primary">Mint</button>
            </div>

            {/* Connection warning */}
            <div className="flex items-start mt-5">
              <img
                src="/images/VectorCheckmark.svg"
                className="mt-1 mr-3 w-3"
                alt=""
              />
              <span className="xsmall">
                Please make sure You are connected to the{" "}
                <span className="text-blue">Polygon Network</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
