import React, { useState } from "react";
import Image from "next/image";
import metaDetails from "../json/metaDetails.json";

const Detail = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  return (
    <section className="pb-24">
      <div className="wrapper">
        <div className="flex justify-center items-center mb-8">
          <div className="TitleDivider_Left" />
          <h1 className="font-bold text-primary mx-7 z-50">Meta-details</h1>
          <div className="TitleDivider_Right" />
        </div>

        <div className="w-full rounded-lg">
          <div className="bg-dark p-5 flex justify-between items-center h-28 w-full rounded-t-lg">
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
                </div>
              </div>
            ))}
          </div>

          <div className="bg-divider p-5 rounded-b-lg">
            {activeTabIndex === 0 && (
              <div className="flex gap-7 items-center">
                <div>
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
                    className="bg-light w-full my-2"
                    style={{ height: "1px" }}
                  />

                  <div className="flex gap-14">
                    {metaDetails.metaverseMap.contents.map((content, index) => (
                      <div key={`metaverseMapContent${index}`}>
                        <div>
                          <big className="text-blue">{content.title}</big>
                        </div>
                        <div className="xsmall">{content.description}</div>
                      </div>
                    ))}
                  </div>

                  <div
                    className="bg-light w-full my-2"
                    style={{ height: "1px" }}
                  />

                  <div className="xsmall text-blue">
                    {metaDetails.metaverseMap.note}
                  </div>
                </div>
              </div>
            )}

            {activeTabIndex === 1 && (
              <div className="flex gap-7 items-center">
                <div>
                  <div
                    className="flex justify-between"
                    style={{ width: "536px" }}
                  >
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
                    style={{ height: "1px" }}
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
                    style={{ height: "1px" }}
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
