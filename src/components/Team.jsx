import React from "react";

const Team = () => {
  return (
    <section className="pt-20">
      <div className="flex justify-center items-center mb-10">
        <div className="TitleDivider_Left" />
        <h1 className="font-bold text-primary mx-7">Team</h1>
        <div className="TitleDivider_Right" />
      </div>

      {/* Part 1: Images */}
      <div className="grid grid-cols-3 grid-rows-1 grid-flow-row items-start">
        <div className="flex flex-col justify-center items-center px-12">
          <img src="/images/Team1.png" className="m-auto" alt="" />
          <h2 className="text-blue my-3 text-center whitespace-nowrap">
            Alex Groapa
          </h2>
          <p className="text-center">
            Artist & Project creator, Senior Product Designer
          </p>
        </div>

        <div className="flex flex-col justify-center items-center px-12">
          <img src="/images/Team2.png" className="m-auto" alt="" />
          <h2 className="text-blue my-3 text-center whitespace-nowrap">
            Michael Mucerschi
          </h2>
          <p className="text-center">
            Architect, Artist, 3D Modeler, Senior Graphic Designer
          </p>
        </div>

        <div className="flex flex-col justify-center items-center px-12">
          <img src="/images/Team3.png" className="m-auto" alt="" />
          <h2 className="text-blue my-3 text-center whitespace-nowrap">
            Peter Iatco
          </h2>
          <p className="text-center">Blockchain Developer </p>
        </div>
      </div>

      {/* Part 2: Note */}
      <div className="TeamNoteBox mt-5">
        <div className="text-blue">
          <big>
            We’ve got a few more niche experts, but they asked to keep their
            identity anonymous.
          </big>
        </div>

        <div className="grid grid-cols-2 my-5">
          <ul className="col-span-1 grid grid-cols-2 grid-rows-4 gap-x-6 text-white">
            <li>Blockchain developer</li>
            <li>Game Designer</li>
            <li>FullStack Developer x3</li>
            <li>Game Developer</li>
            <li>Community manger x2</li>
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
