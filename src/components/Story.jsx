import React from "react";

const Story = () => {
  return (
    <section>
      {/* Part 1: New life systems */}
      <div className="grid grid-cols-5">
        <div className="col-span-2">
          <img src="/images/HeroImage1.png" alt="" />
        </div>

        <div className="col-span-3">
          <div>New life systems</div>

          <div>
            Somewhere around 2097 After Common Era, along with human interaction
            with other form of life, started the building of private cross-race
            city clusters.
          </div>

          <div>
            ...If You want to enter/exit the city, You have to prove Your
            identity with help of a blockchain token. Fingerprints and Face
            recognition for human nation are useless - they can be stolen.
          </div>
        </div>
      </div>

      {/* Part 2: ChainEntities is Future */}
      <div className="grid grid-cols-5">
        <div className="col-span-3">
          <div>ChainEntities is Future</div>

          <div>
            Nowadays (~2097) “almost” every human wears a mask, that way their
            identity stays safe. But everyone has a personality to show, that’s
            why there is ChainEntities.
          </div>

          <div>
            After linking with an Entity, You get marked in the city’s
            blockchain with a unique “styled” ERC-721 token. Afterwards,
            Entities are used for almost everything to prove it’s really YOU.
          </div>

          <div>
            Be carefull with whom You’re having business, because a single
            creature can mark him/her/it-self with multiple Entities!
          </div>
        </div>
        <div className="col-span-2">
          <img src="/images/HeroImage2.png" alt="" />
        </div>
      </div>

      {/* Part 3: Why Polygon blockchain? */}
      <div className="grid grid-cols-5">
        <div className="col-span-2">
          <img src="/images/HeroImage3.png" alt="" />
        </div>

        <div className="col-span-3">
          <div>Why Polygon blockchain?</div>

          <div>
            We stand for equity, so we make it accessible for everyone to get an
            identity and join a city asap. This way You’ll leave behind “outside
            the wall” life. Rush and HODL, to be continued...
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
