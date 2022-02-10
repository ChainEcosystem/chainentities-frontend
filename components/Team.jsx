import React from "react";
import Image from "next/image";

const Team = () => {
  return (
    <section id="team" className="md:pt-20 pt-14">
      <div className="flex justify-center items-center md:mb-10 mb-6">
        <div className="TitleDivider_Left" />
        <h1 className="font-bold text-primary mx-7">Team</h1>
        <div className="TitleDivider_Right" />
      </div>

      {/* Part 1: Images */}
      <div className="md:grid flex flex-col grid-cols-3 grid-rows-1 grid-flow-row md:items-start items-center justify-center">
        <div className="flex flex-col justify-center items-center px-12 md:mb-0 mb-6">
          <Image
            height={100}
            width={100}
            src="/images/Team1.png"
            className="m-auto md:w-auto w-40"
            alt=""
          />
          <h2 className="text-blue md:my-3 my-2 text-center whitespace-nowrap">
            Alex Groapa
          </h2>
          <p className="text-center">
            Artist & Project creator, Senior Product Designer
          </p>
        </div>

        <div className="flex flex-col justify-center items-center px-12 md:mb-0 mb-6">
          <Image
            height={100}
            width={100}
            src="/images/Team2.png"
            className="m-auto md:w-auto w-40"
            alt=""
          />
          <h2 className="text-blue md:my-3 my-2 text-center whitespace-nowrap">
            Michael Mucerschi
          </h2>
          <p className="text-center">
            Architect, Artist, 3D Modeler, Senior Graphic Designer
          </p>
        </div>

        <div className="flex flex-col justify-center items-center px-12">
          <Image
            height={100}
            width={100}
            src="/images/Team3.png"
            className="m-auto md:w-auto w-40"
            alt=""
          />
          <h2 className="text-blue md:my-3 my-2 text-center whitespace-nowrap">
            Peter Iatco
          </h2>
          <p className="text-center">Blockchain Developer </p>
        </div>
      </div>

      {/* Part 2: Note */}
      <div className="TeamNoteBox md:mt-10 mt-6">
        <div className="text-blue">
          <big>
            We’ve got a few more niche experts, but they asked to keep their
            identity anonymous.
          </big>
        </div>

        <div className="grid sm:grid-cols-2 grid-cols-1 md:my-5 my-3">
          <ul className="col-span-1 grid sm:grid-cols-2 grid-cols-1 grid-rows-4 gap-x-6 text-white">
            <li>Blockchain developer</li>
            <li>Game Designer</li>
            <li>FullStack Developer x3</li>
            <li>Game Developer</li>
            <li>Community manager x2</li>
            <li>Marketing advisor</li>
            <li>Lawyer</li>
          </ul>
        </div>

        <div className="text-primary xsmall">
          Thanks for contributing for future of this project!
        </div>
      </div>
    </section>
  );
};

export default Team;
