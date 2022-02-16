import Image from "next/image";
import React from "react";
import overviewBlocks from "../json/overviewBlocks.json";

const Overview = () => {
  return (
    <section className="OverviewSection lg:pb-24 pb-14 relative">
      <div className="StarBg" />
      <div className="wrapper">
        <div className="flex justify-center items-center mb-6">
          <div className="TitleDivider_Left" />
          <h1 className="font-bold text-primary mx-7">Overview</h1>
          <div className="TitleDivider_Right" />
        </div>

        <h3 className="text-center lg:mb-14 mb-6">
          An ecosystem with a continuous development <br /> towards perfection
        </h3>

        <div className="flex lg:flex-row flex-col lg:justify-between justify-center lg:items-start items-center lg:gap-0 gap-4">
          {overviewBlocks.map((block, index) => (
            <div key={`overview${index}`} className="lg:w-auto w-full">
              <div className="OverviewBox">
                <div className="lg:w-auto w-full lg:h-full h-auto flex flex-col justify-center items-start">
                  <div className="flex">
                    <Image
                      className="pointer-events-none"
                      src={`/images/${block.source}.svg`}
                      alt=""
                      height={32}
                      width={32}
                    />
                  </div>
                  <p className="text-blue" style={{ marginTop: "10px" }}>
                    {block.title}
                  </p>
                  <small className="mt-2" style={{ marginTop: "10px" }}>
                    {block.description}
                  </small>
                  <div className="h-full w-full flex items-end">
                    <div className="OverviewBtnImg relative xl:mt-3">
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
            </div>
          ))}
        </div>

        <div
          className="OverviewBox flex-col lg:mt-8 mt-4"
          style={{ width: "100%", height: "unset" }}
        >
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
