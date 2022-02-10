import React from "react";
import aboutShortBlocks from "../json/aboutShortBlocks.json";
import aboutLongBlock from "../json/aboutLongBlock.json";
import Image from "next/image";

const About = () => {
  return (
    <section className="py-24">
      <div className="flex justify-center items-center md:mb-10 mb-6">
        <div className="TitleDivider_Left" />
        <h1 className="font-bold text-primary mx-7">What is ChainEntities</h1>
        <div className="TitleDivider_Right" />
      </div>

      <div className="flex justify-between">
        {aboutShortBlocks.map((block, index) => (
          <div key={`about${index}`}>
            <div className="AboutBox">
              <div className="flex flex-col justify-center items-center text-center">
                <Image
                  src={`/images/${block.source}.svg`}
                  alt=""
                  height={32}
                  width={32}
                />
                <p className="text-blue mt-2">{block.title}</p>
                <small className="mt-2">{block.description}</small>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center mt-4">
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

      <div
        className="flex items-center"
        style={{ gap: "9px", padding: "0 172px" }}
      >
        <div className="AboutDotBig relative mr-1">
          <Image
            src="/images/AboutDot.svg"
            unselectable="on"
            alt=""
            layout="fill"
          />
        </div>
        {[...Array(34)].map((arr, index) => (
          <div className="AboutDotWrap" key={`dotHorizontal${index}`}>
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
        <div className="AboutDotBig relative mx-1">
          <Image
            src="/images/AboutDot.svg"
            unselectable="on"
            alt=""
            layout="fill"
          />
        </div>
        {[...Array(34)].map((arr, index) => (
          <div className="AboutDotWrap" key={`dotHorizontal2${index}`}>
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
        <div>
          <div className="flex flex-col justify-center items-center mb-4">
            {[...Array(4)].map((arr, index) => (
              <div
                className="AboutDotWrap"
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

          <div className="AboutBoxLong">
            <div className="flex flex-col justify-center items-center text-center">
              <Image
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
    </section>
  );
};

export default About;
