import { virtualize } from "react-swipeable-views-utils";
import SwipeableViews from "react-swipeable-views";
import { mod } from "react-swipeable-views-core";
import { useState } from "react";
import Image from "next/image";

const roadMap = [
  {
    icon: `/images/landingPage/Roadmap/Done.svg`,
    title: "Phase 1",
    items: [
      "Project concept",
      "Team building",
      "Smart contract deploy",
      "Website launch",
      "Public minting launch",
    ],
  },
  {
    icon: `/images/landingPage/Roadmap/Doing.svg`,
    title: "Phase 2",
    hasEtc: true,
    items: ["Partnerships", "Building revenue sources", "ChainEntities' DEX"],
  },
  {
    icon: `/images/landingPage/Roadmap/Future.svg`,
    title: "Phase 3",
    hasEtc: true,
    items: [
      "Land auction",
      "Create community clusters",
      "Marketplace launch",
      "Cross-chain",
    ],
  },
  {
    icon: `/images/landingPage/Roadmap/Future.svg`,
    title: "Phase 4",
    hasEtc: true,
    items: [
      "Native token deploy & airdrop",
      "Land auction",
      "Assets pre-sale",
      "Metaverse early access",
    ],
  },
  {
    icon: `/images/landingPage/Roadmap/Future.svg`,
    title: "Phase 5",
    items: ["TBA"],
  },
];

const VirtualizeSwipeableViews = virtualize(SwipeableViews);
const styles = {
  root: {
    padding: "0 75px",
  },
  slideContainer: {},
  slide: {
    // padding: 13,
    minHeight: 100,
    color: "#fff",
  },
};

function slideRenderer(params) {
  const { index, key, items } = params;
  const { hasEtc, title, items: i, icon } = items[mod(index, items?.length)];
  return (
    <div key={key} style={Object.assign({}, styles.slide)}>
      <RoadMapTile
        index={mod(index, items?.length)}
        hasEtc={hasEtc}
        title={title}
        key={index}
        icon={icon}
        items={i}
      />
    </div>
  );
}

export default function Roadmap() {
  const [index, onChangeIndex] = useState(1);
  return (
    <section
      className="AboutSection mb-24 relative overflow-hidden bg-cover min-h-[406px] bg-center no-repeat"
      style={{
        background: 'url("/images/landingPage/Roadmap/ellipse.svg")',
        backgroundSize: "cover",
      }}
    >
      <div
        className="z-10 absolute left-0 top-0 w-full h-full"
        style={{
          background: "rgba(31,27,37,0.8)",
        }}
      />
      <div className="z-20 wrapper absolute left-[50%] translate-x-[-50%] top-0 w-full h-full">
        <div className="flex justify-center items-center mb-14">
          <div className="TitleDivider_Left" />
          <h3 className="text-center text-xl md:text-2xl whitespace-nowrap font-exan sm:mx-7 mx-5 text-transparent bg-clip-text bg-blue-color">
            Road map
          </h3>
          <div className="TitleDivider_Right" />
        </div>
        <ol class="items-start hidden w-full min-w-[100vw] md:min-w-[90vw] lg:min-w-[87vw] md:flex ">
          {roadMap.map(({ title, items, hasEtc, icon }, index) => (
            <RoadMapTile
              hasEtc={hasEtc}
              title={title}
              items={items}
              key={index}
              icon={icon}
            />
          ))}
        </ol>
        <ol className="md:hidden block relative">
          <VirtualizeSwipeableViews
            slideStyle={styles.slideContainer}
            onChangeIndex={onChangeIndex}
            style={styles.root}
            index={index}
            slideCount={roadMap.length}
            slideRenderer={({ index, key }) =>
              slideRenderer({ index, key, items: roadMap })
            }
          />
        </ol>
      </div>
    </section>
  );
}

const RoadMapTile = ({ title, items, hasEtc, icon }) => {
  return (
    <li class="relative mb-6 sm:mb-0 w-full items-center flex flex-col">
      <div className="flex flex-col items-center">
        <div className="flex flex-row gap-x-3">
          <p className="text-center whitespace-nowrap font-exan text-base text-transparent bg-clip-text bg-gradient-to-r from-blue-color to-pink-color">
            {title}
          </p>
          <Image
            className="pointer-events-none"
            height={20}
            width={20}
            src={icon}
            alt=""
          />
        </div>
        <div className="h-[40px] w-[1px] bg-gradient-to-r from-[#514B58] to-[#c4c4c4] my-3" />
      </div>

      <div class="flex items-center w-full">
        <div class="w-full bg-[#4D4557] h-0.5" />
        <Image
          src={`/images/landingPage/Roadmap/ellipsis.svg`}
          className="pointer-events-none"
          height={20}
          width={20}
          alt=""
        />
        <div class="w-full bg-[#4D4557] h-0.5" />
      </div>
      <div class="mt-8 w-full items-center px-2 text-center gap-y-3 flex flex-col">
        {items.map((item, i) => (
          <p key={i} class="text-base font-jost">
            {item}
          </p>
        ))}
        {hasEtc && (
          <p className="lowercase text-center whitespace-nowrap font-jost text-base text-transparent bg-clip-text bg-gradient-to-r from-blue-color to-pink-color">
            etc.
          </p>
        )}
      </div>
    </li>
  );
};
