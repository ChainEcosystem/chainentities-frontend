import React from "react";

const Team = () => {
  return (
    <>
      <div>Team</div>

      <div className="grid grid-cols-3 grid-rows-1 grid-flow-row">
        <div>
          <img src="/images/Team1.png" alt="" />
          <div>Alex Groapa</div>
          <div>Artist & Project creator, Senior Product Designer</div>
        </div>

        <div>
          <img src="/images/Team2.png" alt="" />
          <div>Michael Mucerschi</div>
          <div>Architect, Artist, 3D Modeler, Senior Graphic Designer</div>
        </div>

        <div>
          <img src="/images/Team3.png" alt="" />
          <div>Peter Iatco </div>
          <div>Blockchain Developer </div>
        </div>
      </div>

      <div>
        <div>
          We’ve got a few more niche experts, but they asked to keep their
          identity anonymous.
        </div>

        <div className="grid grid-cols-2">
          <div className="col-span-1 grid grid-cols-2 grid-rows-4">
            <div>test</div>

            <div>test</div>

            <div>test</div>

            <div>test</div>

            <div>test</div>

            <div>test</div>

            <div>test</div>
          </div>
        </div>

        <div>Thanks for contributing for future of this project!</div>
      </div>
    </>
  );
};

export default Team;
