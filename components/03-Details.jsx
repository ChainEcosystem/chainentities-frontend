import React, { useState } from "react";
import Image from "next/image";
import metaDetails from "../json/metaDetails.json";

const Detail = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  return (
    <section className="pb-24">
      <div className="flex justify-center items-center mb-8">
        <div className="TitleDivider_Left" />
        <h1 className="font-bold text-primary mx-7">Meta-details</h1>
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
              <h2>{tab}</h2>

              {/* content */}
              <div
                className={`DetailTabInner  ${
                  activeTabIndex === index ? "DetailTabInner--active" : ""
                }`}
              >
                <h2>{tab}</h2>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-divider p-5 rounded-b-lg">
          {activeTabIndex === 0 && (
            <div className="flex gap-7 items-center">
              <div>
                <Image
                  className="pointer-events-none"
                  src="/images/MetaDetail1.svg"
                  alt=""
                  height={268}
                  width={536}
                />
              </div>

              <div className="flex flex-col w-full">
                <div style={{ fontSize: "22px", lineHeight: "22px" }}>
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
        </div>
      </div>
    </section>
  );
};

export default Detail;
