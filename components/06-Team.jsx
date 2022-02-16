import React from "react";
import Image from "next/image";
import teamMembers from "../json/teamMembers.json";

const Team = () => {
  return (
    <section className="TeamSection relative">
      <div className="StarBg" />
      <div className="wrapper">
        <div className="flex justify-center items-center md:mb-10 mb-6">
          <div className="TitleDivider_Left" />
          <h1 className="whitespace-nowrap font-bold text-primary text-center sm:mx-7 mx-5">
            Core Team
          </h1>
          <div className="TitleDivider_Right" />
        </div>

        {/* Part 1: Images */}
        <div className="grid lg:grid-cols-3 grid-cols-2 md:items-start items-center justify-center gap-y-8 xl:gap-x-56 lg:gap-x-40 gap-x-10">
          {teamMembers.map((member, index) => (
            <div
              className="flex flex-col lg:h-auto h-full lg:justify-center items-center md:mb-0 mb-6"
              key={`teamMember${index}`}
            >
              <div className="lg:flex hidden">
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
              <h2 className="sm:block hidden text-blue mb-2 mt-3 text-center whitespace-nowrap">
                {member.name}
              </h2>
              <div className="sm:hidden text-blue mb-2 mt-3 text-center">
                <small>{member.name}</small>
              </div>

              <p className="sm:block hidden text-center xl:px-4 lg:px-0 px-8">
                {member.role}
              </p>
              <div className="sm:hidden text-base text-center">
                {member.role}
              </div>
            </div>
          ))}
        </div>

        {/* Part 2: Note */}
        <div className="TeamNoteBox mt-8">
          <div className="text-blue">
            <big>
              We’ve got a few more niche experts, but they asked to keep their
              identity anonymous.
            </big>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 lg:my-4 my-5">
            <ul className="col-span-1 grid lg:grid-cols-2 grid-cols-1 grid-rows-3 gap-x-6 text-white lg:gap-y-0 gap-1">
              <li>Web3 developer</li>
              <li>FullStack Developer</li>
              <li>Community manager x2</li>
              <li>Game Developer</li>
              <li>Marketing advisor</li>
              <li>Graphic Designer</li>
            </ul>
          </div>

          <div className="text-primary xsmall">
            Thank to all for being a valuable member of the team.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
