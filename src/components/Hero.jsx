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
        <div className="MintContainer btn-secondary relative h-full w-full hover:opacity-100 flex justify-center items-center">
          <div className="MintContent">
            <h3 className="text-primary">testing</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
