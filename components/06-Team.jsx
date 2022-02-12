import React from "react";
import Image from "next/image";
import teamMembers from "../json/teamMembers.json";

const Team = () => {
  return (
    <section id="team">
      <div className="flex justify-center items-center md:mb-10 mb-6">
        <div className="TitleDivider_Left" />
        <h1 className="font-bold text-primary mx-7">Core Team</h1>
        <div className="TitleDivider_Right" />
      </div>

      {/* Part 1: Images */}
      <div className="md:grid flex flex-col grid-cols-3 md:items-start items-center justify-center gap-y-8 gap-x-56">
        {teamMembers.map((member, index) => (
          <div
            className="flex flex-col justify-center items-center md:mb-0 mb-6"
            key={`teamMember${index}`}
          >
            <Image
              height={250}
              width={250}
              src={`/images/Team${index + 1}.svg`}
              alt=""
            />
            <div
              style={{ fontSize: "37px", lineHeight: "37px" }}
              className="text-blue mb-2 mt-3 text-center whitespace-nowrap"
            >
              {member.name}
            </div>
            <p className="text-center px-4">{member.role}</p>
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

        <div className="grid sm:grid-cols-2 grid-cols-1 my-4">
          <ul className="col-span-1 grid sm:grid-cols-2 grid-cols-1 grid-rows-3 gap-x-6 text-white">
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
    </section>
  );
};

export default Team;