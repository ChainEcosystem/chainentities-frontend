import React from "react";
import aboutShortBlocks from "../json/aboutShortBlocks.json";
import aboutLongBlock from "../json/aboutLongBlock.json";
import Image from "next/image";

const About = () => {
  return (
    <section className="AboutSection lg:py-24 py-14 relative">
      <div className="StarBg" />

      <div className="wrapper">
        <div className="flex justify-center items-center lg:mb-14 mb-4">
          <div className="TitleDivider_Left" />
          <h1 className="whitespace-nowrap font-bold text-primary sm:mx-7 mx-5 text-center">
            What is
            <br className="lg:hidden" /> ChainEntities
          </h1>
          <div className="TitleDivider_Right" />
        </div>

        <div className="flex lg:flex-row flex-col lg:gap-0 gap-4 lg:justify-between justify-center lg:items-start items-center">
          {aboutShortBlocks.map((block, index) => (
            <div className="lg:w-auto w-full" key={`about${index}`}>
              <div className="AboutBox">
                <div className="flex flex-col justify-center items-center text-center">
                  <Image
                    className="pointer-events-none"
                    src={`/images/${block.source}.svg`}
                    alt=""
                    height={32}
                    width={32}
                  />
                  <p className="text-blue mt-2">{block.title}</p>
                  <small className="mt-2">{block.description}</small>
                </div>
              </div>

              <div className="lg:flex hidden flex-col justify-center items-center mt-4">
                {[...Array(4)].map((arr, index) => (
                  <div
                    className="AboutDotWrap AboutDotDown"
                    key={`dotDown${block.source}${index}`}
                    style={{ marginBottom: "8px" }}
                  >
                    <div className="AboutDot relative">
                      <Image
                        src="/images/AboutDot.svg"
                        unselectable="on"
                        alt=""
                        layout="fill"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="lg:flex hidden AboutDotMidLine items-center">
          <div className="AboutDotBig relative mr-1">
            <Image
              src="/images/AboutDot.svg"
              unselectable="on"
              alt=""
              layout="fill"
            />
          </div>
          {[...Array(34)].map((arr, index) => (
            <div
              className="AboutDotWrap AboutDotMidLeft"
              key={`dotHorizontal${index}`}
            >
              <div className="AboutDot relative">
                <Image
                  src="/images/AboutDot.svg"
                  unselectable="on"
                  alt=""
                  layout="fill"
                />
              </div>
            </div>
          ))}
          <div className="AboutDotBig AboutDotBigMid relative mx-1">
            <Image
              src="/images/AboutDot.svg"
              unselectable="on"
              alt=""
              layout="fill"
            />
          </div>
          {[...Array(34)].map((arr, index) => (
            <div
              className="AboutDotWrap AboutDotMidRight"
              key={`dotHorizontal2${index}`}
            >
              <div className="AboutDot relative">
                <Image
                  src="/images/AboutDot.svg"
                  unselectable="on"
                  alt=""
                  layout="fill"
                />
              </div>
            </div>
          ))}
          <div className="AboutDotBig relative ml-1">
            <Image
              src="/images/AboutDot.svg"
              unselectable="on"
              alt=""
              layout="fill"
            />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="lg:w-auto w-full">
            <div className="lg:flex hidden flex-col justify-center items-center mb-4">
              {[...Array(4)].map((arr, index) => (
                <div
                  className="AboutDotWrap AboutDotUp"
                  key={`dotUp${index}`}
                  style={{ marginTop: "10px" }}
                >
                  <div className="AboutDot relative">
                    <Image
                      src="/images/AboutDot.svg"
                      unselectable="on"
                      alt=""
                      layout="fill"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="AboutBoxLong lg:mt:0 mt-4">
              <div className="flex flex-col justify-center items-center text-center">
                <Image
                  unselectable="on"
                  src={`/images/${aboutLongBlock.source}.svg`}
                  alt=""
                  height={32}
                  width={32}
                />
                <p className="text-blue mt-2">{aboutLongBlock.title}</p>
                <small className="mt-2">{aboutLongBlock.description}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
