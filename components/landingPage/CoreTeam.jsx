import React, { useState } from "react";
import Image from "next/image";
import teamMembers from "../../json/teamMembers.json";
import Interweave from "interweave";

import SwipeableViews from "react-swipeable-views";
import { virtualize } from "react-swipeable-views-utils";
import { mod } from "react-swipeable-views-core";

const VirtualizeSwipeableViews = virtualize(SwipeableViews);
const arrowStyles = {
  borderRadius: "8px",
  cursor: "pointer",
  zIndex: 10,
};
const styles = {
  root: {
    padding: "0 75px",
  },
  slideContainer: {},
  slide: {
    padding: 13,
    minHeight: 100,
    color: "#fff",
  },
};

function slideRenderer(params) {
  const { index, key, items } = params;
  const { name, role } = items[mod(index, items?.length)];

  return (
    <div key={key} style={Object.assign({}, styles.slide)}>
      <TeamMemberCard
        index={mod(index, items?.length)}
        member={{ name, role }}
      />
    </div>
  );
}

export default function CoreTeam() {
  const [index, onChangeIndex] = useState(0);
  return (
    <section className="TeamSection relative mb-28 p-0">
      <div className="absolute right-0 top-[-300px] md:top-[-300px] z-10">
        <Image
          src={"/images/landingPage/Roadmap/RoadmapTicket.png"}
          height={500}
          width={400}
        />
      </div>
      <div className="StarBg" />
      <div className="wrapper" style={{ width: "100%" }}>
        <div className="flex justify-center items-center lg:mb-20 mb-4">
          <div className="TitleDivider_Left" />
          <h3 className="text-center text-xl md:text-2xl whitespace-nowrap font-exan sm:mx-7 mx-5 text-transparent bg-clip-text bg-blue-color">
            Core Team
          </h3>
          <div className="TitleDivider_Right" />
        </div>

        {/* Part 1: Images */}
        <div className="hidden lg:grid grid-cols-3 md:items-start items-center justify-center sm:gap-y-20 gap-y-8 xl:gap-x-56 lg:gap-x-40 gap-x-10">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={`teamMember${index}`}
              member={member}
              index={index}
            />
          ))}
        </div>
        <div className="lg:hidden block relative">
          <div
            className="absolute left-0 top-0 h-full flex flex-row justify-center items-center p-5 hover:bg-opacity-75 duration-300 "
            onClick={() => onChangeIndex((i) => i - 1)}
            style={{
              ...arrowStyles,
              background:
                "linear-gradient(270deg, rgba(81, 75, 88, 0.5) 0%, rgba(22, 2, 22, 0) 100%)",
            }}
          >
            <Image
              src={`/images/landingPage/Team/TeamArrow.svg`}
              className="rotate-180"
              width={10.5}
              height={21}
              alt=""
            />
          </div>
          <div
            className="absolute right-0 top-0 h-full flex flex-row justify-center items-center p-5 hover:bg-opacity-75 duration-300 "
            onClick={() => onChangeIndex((i) => i + 1)}
            style={{
              ...arrowStyles,
              background:
                "linear-gradient(90deg, rgba(81, 75, 88, 0.5) 0%, rgba(22, 2, 22, 0) 100%)",
            }}
          >
            <Image
              src={`/images/landingPage/Team/TeamArrow.svg`}
              width={10.5}
              height={21}
              alt=""
            />
          </div>
          <VirtualizeSwipeableViews
            slideStyle={styles.slideContainer}
            onChangeIndex={onChangeIndex}
            style={styles.root}
            index={index}
            slideRenderer={({ index, key }) =>
              slideRenderer({ index, key, items: teamMembers })
            }
          />
        </div>
      </div>
    </section>
  );
}

function TeamMemberCard({ member, index }) {
  return (
    <div className="flex flex-col lg:h-auto h-full lg:justify-center items-center">
      <div className="lg:flex hidden overflow-hidden">
        <Image
          height={170}
          width={170}
          src={`/images/Team${index + 1}.svg`}
          alt=""
        />
      </div>
      <div className="lg:hidden flex">
        <Image
          height={140}
          width={140}
          src={`/images/Team${index + 1}.svg`}
          alt=""
        />
      </div>
      <div className="flex flex-row gap-3 items-center">
        <h2 className="mb-2 mt-3 text-center whitespace-nowrap font-exan text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-color to-pink-color">
          {member?.name}
        </h2>
        <div className="h-6 w-6 md:h-8 md:w-8 bg-[#2A2630] hover:bg-[#1DA1F2] rounded items-center justify-center flex flex-row cursor-pointer hover:text-white text-[#DE59FF] duration-300">
          <svg
            width="15"
            height="12"
            viewBox="0 0 15 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5 1.42545C13.9852 1.65977 13.4249 1.82841 12.8478 1.89409C13.4469 1.51853 13.8956 0.925213 14.1097 0.225451C13.5474 0.578331 12.9315 0.825776 12.2892 0.956811C12.0208 0.654018 11.6961 0.4128 11.3354 0.248186C10.9747 0.0835725 10.5858 -0.000908491 10.1928 7.36757e-06C8.60287 7.36757e-06 7.32418 1.35977 7.32418 3.02841C7.32418 3.26273 7.3511 3.49705 7.39485 3.72249C5.01412 3.59113 2.89082 2.39113 1.47921 0.553853C1.222 1.01737 1.08721 1.54514 1.08887 2.08225C1.08887 3.13314 1.5953 4.05977 2.36756 4.60474C1.91246 4.58583 1.46801 4.45385 1.07036 4.21953V4.25681C1.07036 5.72841 2.0563 6.94793 3.37033 7.22841C3.12361 7.29602 2.8698 7.33061 2.61489 7.33136C2.42813 7.33136 2.25147 7.31184 2.07313 7.28521C2.43655 8.48521 3.49483 9.35681 4.75502 9.38521C3.76908 10.2 2.53413 10.6793 1.19319 10.6793C0.95259 10.6793 0.730501 10.6704 0.5 10.642C1.77196 11.503 3.28116 12 4.90644 12C10.1827 12 13.0699 7.38817 13.0699 3.38521C13.0699 3.25385 13.0699 3.12249 13.0615 2.99113C13.6201 2.55977 14.1097 2.02545 14.5 1.42545Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      <p className="text-center xl:px-4 lg:px-0 px-8 text-base">
        <Interweave content={member?.role} />
      </p>
    </div>
  );
}
