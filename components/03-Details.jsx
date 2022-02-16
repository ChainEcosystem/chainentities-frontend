import React, { useState } from "react";
import Image from "next/image";
import metaDetails from "../json/metaDetails.json";

const Detail = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  return (
    <section className="lg:pb-24 pb-14">
      <div className="wrapper">
        <div className="flex justify-center items-center lg:mb-8 mb-4">
          <div className="TitleDivider_Left" />
          <h1 className="font-bold text-primary mx-7 z-50 text-center">
            Meta-details
          </h1>
          <div className="TitleDivider_Right" />
        </div>

        <div className="w-full rounded-lg">
          <div className="bg-dark p-5 flex lg:flex-row flex-col lg:justify-between justify-center items-center lg:h-28 w-full rounded-t-lg lg:gap-0 gap-4">
            {metaDetails.tabs.map((tab, index) => (
              <div
                key={`metaDetailTab-${index}`}
                onClick={() => setActiveTabIndex(index)}
                className="DetailTab cursor-pointer"
              >
                {/* placeholder */}
                <h3>{tab}</h3>

                {/* content */}
                <div
                  className={`DetailTabInner  ${
                    activeTabIndex === index ? "DetailTabInner--active" : ""
                  }`}
                >
                  <h3>{tab}</h3>

                  <div className="lg:hidden flex">
                    <Image
                      src={`/images/VectorArrow${
                        activeTabIndex === index ? "Up" : "Down"
                      }Pink.svg`}
                      alt=""
                      height={19}
                      width={19}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-divider p-5 rounded-b-lg">
            {activeTabIndex === 0 && (
              <div className="flex lg:flex-row flex-col lg:gap-7 gap-8 items-center">
                <div className="lg:w-auto w-full">
                  <div className="DetailMap relative">
                    <Image
                      className="pointer-events-none"
                      src="/images/MetaDetail1.svg"
                      alt=""
                      layout="fill"
                    />
                  </div>
                </div>

                <div className="flex flex-col w-full">
                  <div className="lsmall">
                    {metaDetails.metaverseMap.headline}
                  </div>

                  <div
                    className="bg-light w-full lg:my-2 my-4"
                    style={{ height: "2px" }}
                  />

                  <div className="flex lg:flex-row flex-col lg:gap-14 gap-6">
                    {metaDetails.metaverseMap.contents.map((content, index) => (
                      <div key={`metaverseMapContent${index}`}>
                        <div className="mb-2">
                          <big className="text-blue">{content.title}</big>
                        </div>
                        <div className="xsmall">{content.description}</div>
                      </div>
                    ))}
                  </div>

                  <div
                    className="bg-light w-full lg:my-2 my-4"
                    style={{ height: "2px" }}
                  />

                  <div className="xsmall text-blue">
                    {metaDetails.metaverseMap.note}
                  </div>
                </div>
              </div>
            )}

            {activeTabIndex === 1 && (
              <div className="flex lg:flex-row flex-col lg:gap-7 gap-9 items-center">
                <div>
                  <div className="DetailModelsContainer flex justify-between">
                    <Image
                      src="/images/MetaDetail2-1.svg"
                      height={252}
                      width={220}
                      alt=""
                    />
                    <Image
                      src="/images/VectorArrowRight.svg"
                      height={20}
                      width={20}
                      alt=""
                    />
                    <Image
                      src="/images/MetaDetail2-2.svg"
                      height={252}
                      width={220}
                      alt=""
                    />
                  </div>
                </div>

                <div className="flex flex-col w-full">
                  <div className="lsmall">
                    2D Pixel tickets has certain traits (such as shoes, pants,
                    race, gender, etc.) that will be carried in the metaverse to
                    a 3D model in the form of the same traits. The 3D in-game
                    models are created in{" "}
                    <a
                      href="https://www.unrealengine.com/en-US/metahuman-creator"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink whiteHoverFill"
                    >
                      MetaHuman Creator
                    </a>{" "}
                    software.
                  </div>

                  <div
                    className="bg-light w-full my-4"
                    style={{ height: "2px" }}
                  />

                  <div className="lsmall">
                    2D Pixel tickets are access IDs for the metaverse. Every
                    progress in the metaverse is stored under the token ID of a
                    specific NFT{" "}
                    <span className="text-blue">
                      (data transfer to another token ID is possible)
                    </span>
                  </div>

                  <div
                    className="bg-light w-full my-4"
                    style={{ height: "2px" }}
                  />

                  <div className="xsmall text-blue">
                    *Players can trade their tickets just like they would any
                    virtual asset (NFT)
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
