import React from "react";
import Image from "next/image";

const Story = () => {
  return (
    <section className="StorySection relative">
      <div className="StarBg" />
      <div className="wrapper">
        <div className="flex justify-center items-center mb-8">
          <div className="TitleDivider_Left" />
          <h1 className="font-bold text-primary mx-7 text-center">The story</h1>
          <div className="TitleDivider_Right" />
        </div>

        {/* Part 1: New life systems */}
        <div className="lg:grid flex flex-col-reverse justify-center items-center grid-cols-5  lg:text-left text-center">
          <div className="col-span-2 h-full lg:mt-0 mt-8">
            <div className="lg:flex hidden">
              <Image height={400} width={529} src="/images/Story1.png" alt="" />
            </div>
            <div className="lg:hidden">
              <Image height={343} width={343} src="/images/Story1.png" alt="" />
            </div>
          </div>

          <div className="bg-blacked col-span-3 flex flex-col justify-center xl:pl-20 lg:pl-14">
            <h2 className="font-bold text-blue mb-6">New life systems</h2>

            <div className="lsmall">
              Somewhere around 2097 After Common Era, along with human{" "}
              <span className="text-blue">
                interaction with other form of life
              </span>
              , started the building of private cross-race city clusters.
            </div>

            <div className="lg:mt-4 mt-6 lsmall">
              ...Because of multiple nations, none of the races are ruling big
              metropolises, so it won’t affect impartial decision-making by that
              nation in power. Instead of one authority, there is a
              decentralized mechanism, that permits all citizens to vote for
              future changes in the city and make it prosper in a fair way for
              every its citizen.
            </div>
          </div>
        </div>

        {/* Part 2: ChainEntities is Future */}
        <div className="lg:grid flex flex-col justify-center items-center lg:text-left text-center grid-cols-5 lg:mt-20 mt-12">
          <div className="col-span-3 flex flex-col justify-center xl:pr-40 lg:pr-32">
            <h2 className="text-blue mb-6">ChainEntities - future identity </h2>

            <div className="lsmall">
              Nowadays (~2097) “almost” every human wears a mask, so their
              identity stays safe (Fingerprints and Face recognition is useless
              - they can be stolen). Still, everyone has a personality behind
              the mask, that’s why there is{" "}
              <span className="text-blue">ChainEntities.</span>
            </div>

            <div className="lsmall lg:mt-4 mt-6">
              After linking with an Entity, You get marked in the city’s
              blockchain with a unique “styled” ERC-721 token. Afterwards,
              Entities are used for almost everything to{" "}
              <span className="text-blue">prove Your identity.</span>
            </div>

            <div className="xsmall text-primary lg:mt-4 mt-6">
              Your NFT - Your style!
            </div>
          </div>
          <div className="col-span-2 flex justify-end items-center relative">
            <div className="lg:flex hidden">
              <Image width={527} height={493} src="/images/Story2.svg" alt="" />
            </div>
            <div className="lg:hidden mt-8">
              <Image width={347} height={315} src="/images/Story2.svg" alt="" />
            </div>
          </div>
        </div>

        {/* Part 3: Why Polygon blockchain? */}
        <div className="lg:grid flex flex-col-reverse justify-center items-center lg:text-left text-center grid-cols-5 lg:mt-6 mt-12">
          <div className="col-span-2 flex items-center justify-start relative h-full">
            <div className="lg:block hidden">
              <Image width={547} height={366} src="/images/Story3.svg" alt="" />
            </div>
            <div className="lg:hidden mt-6">
              <Image
                width={343}
                height={150}
                src="/images/Story3Mobile.svg"
                alt=""
              />
            </div>
          </div>

          <div className="col-span-3 flex flex-col justify-center xl:pl-20 lg:pl-14">
            <h2 className="text-blue mb-6">Why Polygon blockchain?</h2>

            <div className="lsmall">
              We stand for <span className="text-blue">equity</span>, so we make
              it accessible for everyone to experience the limitless potential
              of this ecosystem.
              <div>
                Rush for ticket minting,{" "}
                <span className="text-blue">to be continued...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
