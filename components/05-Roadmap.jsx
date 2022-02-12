import React from "react";

const Roadmap = () => {
  return (
    <section id="roadmap" className="py-24">
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
                <li>Blockchain, metaverse research</li>
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
                <li>1’st 2D Pixel Ticket collection launch</li>
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
                <li>Next art creation for future 3D in-game models</li>
                <li>2’nd and 3’rd 2D Pixel ticket collection launch</li>
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
                <li>3D in-game models presentation</li>
                <li>Building community clusters for the alpha launch</li>
                <li>
                  Native token deploy and airdrop{" "}
                  <a
                    href="/files/litepaper.pdf"
                    target="_blank"
                    className="text-pink transition duration-200 hover:text-white"
                  >
                    (details - Litepaper)
                  </a>
                </li>
                <li>Metaverse land auction start</li>
              </ul>
            </div>

            {/* Box 5 */}
            <div className="RoadmapBox">
              <div className="RoadmapBox__Title">
                <big className="mr-2">Q4</big>
                <big>2022</big>
              </div>

              <ul>
                <li>In-game monetization system presentation</li>
                <li>
                  Giveaway
                  <span className="text-blue"> (Community voting)</span>
                </li>
                <li>Brand creation</li>
                <li>Metaverse early closed access</li>
              </ul>
            </div>

            {/* Box 6 */}
            <div className="RoadmapBox">
              <div className="RoadmapBox__Title">
                <big className="mr-2">Q1</big>
                <big>2023</big>
              </div>

              <ul>
                <li>Marketplace beta launch</li>
                <li>Metaverse early access</li>
                <li>
                  Houses, transport and new assets launch for the metaverse
                </li>
                <li>Roadmap update</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="md:grid grid-cols-3 mt-6 gap-10">
          <div className="col-span-2 xsmall">
            <span className="text-blue">Note: </span>
            We’ve got big plans for a future ecosystem, however some
            deadlines/releases can be postponed. Thanks for Your support and
            understanding!
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
