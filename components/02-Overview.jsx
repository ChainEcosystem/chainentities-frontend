import Image from "next/image";
import React from "react";
import overviewBlocks from "../json/overviewBlocks.json";

const Overview = () => {
  return (
    <section className="OverviewSection pb-24 relative">
      <div className="StarBg" />
      <div className="container mx-auto">
        <div className="flex justify-center items-center mb-6">
          <div className="TitleDivider_Left" />
          <h1 className="font-bold text-primary mx-7">Overview</h1>
          <div className="TitleDivider_Right" />
        </div>

        <h2 className="text-center mb-14">
          An ecosystem with a continuous development <br /> towards perfection
        </h2>

        <div className="flex justify-between">
          {overviewBlocks.map((block, index) => (
            <div key={`overview${index}`}>
              <div className="AboutBox">
                <div className="flex flex-col justify-center items-start">
                  <Image
                    className="pointer-events-none"
                    src={`/images/${block.source}.svg`}
                    alt=""
                    height={32}
                    width={32}
                  />
                  <p className="text-blue mt-2">{block.title}</p>
                  <small className="mt-2">{block.description}</small>
                  <div className="w-full h-20 relative mt-3">
                    <Image
                      className="pointer-events-none"
                      src={`/images/${block.buttonSrc}.svg`}
                      alt=""
                      layout="fill"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="AboutBox flex-col mt-8" style={{ width: "100%" }}>
          <div className="w-full">
            <p className="text-blue mb-2">More content coming soon...</p>
          </div>
          <div className="w-full">
            <small>
              Stay tuned, we’re about to launch ChainEntities native token, city
              governance system and more...
            </small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
