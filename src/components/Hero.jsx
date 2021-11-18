import React, { useState } from "react";

const Hero = () => {
  const [mintCount, setMintCount] = useState(1);

  return (
    <section className="grid grid-cols-5">
      <div className="col-span-3">
        <h2 className="font-bold text-primary">
          ChainEntities make You styled
        </h2>
        <h1>Data's limited, rush for Your unique token</h1>

        <p>
          The time when everyone and everything lives on blockchain is here.
        </p>

        <div className="flex">
          <button className="btn-primary mr-2">Opensea</button>

          <button className="btn-secondary">Discord</button>
        </div>
      </div>

      <div className="col-span-2">
        <div className="MintContainer h-72 w-80">
          <div className="MintContent">
            <big className="block">ChainEntities Minted</big>
            <h2 className="font-bold text-primary">0/4444</h2>

            <hr
              style={{
                width: "100%",
                borderTop: "solid 2px grey",
                margin: "14px 0",
              }}
            />

            <big className="block">
              1 Entity costs <span className="text-blue">29</span> Matic
            </big>
            <small className="text-divider block mt-1">
              Excluding gas fees
            </small>

            <div className="flex items-center mt-6">
              {/* Mint count control */}
              <div
                className="flex justify-center items-center bg-light w-min"
                style={{ borderRadius: "6px", padding: "3px" }}
              >
                <div
                  className="MintCountButtonContainer"
                  onClick={() => {
                    setMintCount((prevCount) => {
                      if (prevCount === 0) return prevCount;
                      return prevCount - 1;
                    });
                  }}
                >
                  <div className="MintCountButtonContent">
                    <big className="text-primary">-</big>
                  </div>
                </div>

                <div className="flex justify-center items-center w-12">
                  <big>{mintCount}</big>
                </div>

                <div
                  className="MintCountButtonContainer"
                  onClick={() => {
                    setMintCount((prevCount) => prevCount + 1);
                  }}
                >
                  <div className="MintCountButtonContent">
                    <big className="text-primary">+</big>
                  </div>
                </div>
              </div>

              {/* Mint button */}
              <button
                className="btn-primary block h-full w-full"
                style={{
                  padding: "11px 0",
                  width: "100px",
                  marginLeft: "auto",
                }}
              >
                Mint
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
