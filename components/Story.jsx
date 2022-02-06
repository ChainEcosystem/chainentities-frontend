import React from "react";
import Image from "next/image";

const Story = () => {
  return (
    <section id="story">
      {/* Part 1: New life systems */}
      <div className="md:grid flex flex-col-reverse justify-center items-center grid-cols-5 md:pt-10 pt-14 md:text-left text-center">
        <div className="col-span-2">
          <Image
            src="/images/HeroImage1.png"
            className="md:w-auto w-64"
            alt=""
          />
        </div>

        <div className="col-span-3 flex flex-col justify-center md:pl-16 md:mb-0 mb-7">
          <h2 className="font-bold text-primary mb-6">New life systems</h2>

          <p>
            Somewhere around 2097 After Common Era, along with human{" "}
            <span className="text-blue">
              interaction with other form of life
            </span>
            , started the building of private cross-race city clusters.
          </p>

          <p className="mt-5">
            ...If You want to enter/exit the city, You have to{" "}
            <span className="text-blue">prove Your identity</span> with help of
            a blockchain token. Fingerprints and Face recognition for human
            nation are useless - they can be stolen.
          </p>
        </div>
      </div>

      {/* Part 2: ChainEntities is Future */}
      <div className="md:grid flex flex-col justify-center items-center md:text-left text-center grid-cols-5 md:pt-20 pt-14">
        <div className="col-span-3 flex flex-col justify-center md:pr-24 md:mb-0 mb-7">
          <h2 className="text-primary mb-6">ChainEntities are the future</h2>

          <p>
            Nowadays (~2097) “almost” every human wears a mask, that way their
            identity stays safe. But everyone has a personality to show, that’s
            why there are <span className="text-blue">ChainEntities</span>.
          </p>

          <p className="mt-5">
            After linking with an Entity, You get marked in the city’s
            blockchain with a unique “styled” ERC-721 token. Afterwards,
            Entities are used for almost everything to prove{" "}
            <span className="text-blue">it’s really YOU</span>.
          </p>

          <div className="xsmall text-primary mt-5">
            Be carefull with whom You’re having business, because a single
            creature can mark him/her/it-self with multiple Entities!
          </div>
        </div>
        <div className="col-span-2 flex justify-end items-center">
          <Image
            src="/images/HeroImage2.png"
            className="md:w-auto w-64"
            alt=""
          />
        </div>
      </div>

      {/* Part 3: Why Polygon blockchain? */}
      <div className="md:grid flex flex-col-reverse justify-center items-center md:text-left text-center grid-cols-5 md:pt-20 pt-14">
        <div className="col-span-2 flex items-center justify-start">
          <Image
            src="/images/HeroImage3.png"
            className="md:block hidden"
            alt=""
          />
          <Image
            src="/images/HeroImage3_Mobile.png"
            className="md:hidden block w-64"
            alt=""
          />
        </div>

        <div className="col-span-3 flex flex-col justify-center md:pl-24">
          <h2 className="text-primary mb-6">Why Polygon blockchain?</h2>

          <p>
            We stand for <span className="text-blue">equity</span>, so we make
            it accessible for everyone to get an identity and join a city asap.
            This way You’ll leave behind “outside the wall” life. Rush and HODL,{" "}
            <span className="text-blue">to be continued...</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Story;
