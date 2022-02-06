import React from "react";

const Roadmap = () => {
  return (
    <section id="roadmap" className="md:pt-20 pt-14">
      <div className="container mx-auto">
        <div className="flex justify-center items-center md:mb-10 mb-6">
          <div className="TitleDivider_Left" />
          <h1 className="font-bold text-primary mx-7">Roadmap</h1>
          <div className="TitleDivider_Right" />
        </div>
      </div>

      <div className="ScreenContainer container mx-auto">
        <div className="overflow-hidden flex items-center justify-center relative">
          <div className="sm:grid flex sm:max-w-none max-w-full sm:overflow-x-hidden overflow-x-scroll md:grid-cols-3 sm:grid-cols-2 sm:grid-rows-2 sm:grid-flow-row md:gap-10 sm:gap-5 sm:justify-center sm:items-center sm:justify-items-center sm:py-0 py-3">
            {/* Box 1 */}
            <div className="RoadmapBox" style={{ marginLeft: "10px" }}>
              <div className="RoadmapBox__Title">
                <big className="mr-2">Q2-4</big>
                <big>2021</big>
              </div>

              <ul>
                <li>Team Building</li>
                <li>Project concepting</li>
                <li>Art creating</li>
                <li>Blockchain research</li>
                <li>Smart contract writing</li>
                <li>Smart contract launch</li>
              </ul>
            </div>

            {/* Box 2 */}
            <div className="RoadmapBox">
              <div className="RoadmapBox__Title">
                <big className="mr-2">Q1</big>
                <big>2022</big>
              </div>

              <ul>
                <li>Website launch</li>
                <li>Public minting launch</li>
                <li>
                  Community 200 NFT’s giveaway{" "}
                  <span className="text-blue">(January)</span>
                </li>
                <li>Social media marketing strategy</li>
              </ul>
            </div>

            {/* Box 3 */}
            <div className="RoadmapBox">
              <div className="RoadmapBox__Title">
                <big className="mr-2">Q2</big>
                <big>2022</big>
              </div>

              <ul>
                <li>
                  <span className="text-blue">
                    Next art creation for future merging 2+ collections (race,
                    sex, city?)
                  </span>
                </li>
                <li>Video presentation for a future ecosystem</li>
                <li>Roadmap update</li>
              </ul>
            </div>

            {/* Box 4 */}
            <div className="RoadmapBox">
              <div className="RoadmapBox__Title">
                <big className="mr-2">Q3</big>
                <big>2022</big>
              </div>

              <ul>
                <li>
                  Giveaway
                  <span className="text-blue"> (Community voting)</span>
                </li>
                <li>
                  Whitelist injection and holders discount system for future
                  collections
                </li>
                <li>“Outside the wall” concept creating</li>
                <li>Brand creation</li>
              </ul>
            </div>

            {/* Box 5 */}
            <div className="RoadmapBox">
              <div className="RoadmapBox__Title">
                <big className="mr-2">Q4</big>
                <big>2022</big>
              </div>

              <ul>
                <li>Metaverse land buying</li>
                <li>Building community clusters</li>
                <li>Gamification project announcement</li>
                <li>
                  Giveaway
                  <span className="text-blue"> (Community voting)</span>
                </li>
              </ul>
            </div>

            {/* Box 6 */}
            <div className="RoadmapBox">
              <div className="RoadmapBox__Title">
                <big className="mr-2">Q1</big>
                <big>2023</big>
              </div>

              <ul>
                <li>
                  Personalized jackets, caps, “identities” etc. holders giveaway
                </li>
                <li>Developing token smart contract</li>
                <li>Chain Ecosystem platform creating</li>
                <li>Roadmap update</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="md:grid grid-cols-3 mt-6 gap-10">
          <div className="col-span-2 xsmall md:pr-5">
            <span className="text-blue">Note: </span>
            We’ve got big plans for a future ecosystem (game, apps and some
            exclusive projects), however some deadlines/releases can be
            postponed. Thanks for Your support and understanding!
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;