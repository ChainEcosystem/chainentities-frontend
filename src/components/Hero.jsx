import React from "react";

const Hero = () => {
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
        <div className="MintContainer h-40 w-full">
          <div className="MintContent">
            <big className="block">ChainEntities Minted</big>
            <h2 className="font-bold text-primary">0/4444</h2>
            <big className="block">
              1 Entity costs <span className="text-blue">29</span> Matic
            </big>
            <small className="text-divider block">Excluding gas fees</small>

            <div>
              <div className="w-5/12 p-2 flex">
                <button className="MintCountButton">
                  <big>+</big>
                </button>

                <big className="block">1</big>
                <button className="MintCountButton">
                  <big>-</big>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
