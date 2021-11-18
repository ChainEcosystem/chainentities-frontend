import React from "react";

const FAQ = () => {
  return (
    <section className="pt-20">
      <div className="flex justify-center items-center mb-10">
        <div className="TitleDivider_Left" />
        <h1 className="font-bold text-primary mx-7">FAQ</h1>
        <div className="TitleDivider_Right" />
      </div>

      {/* FAQ Box 1 */}
      <div className="TeamNoteBox cursor-pointer mb-3">
        <div className="TeamNoteBox__Button">
          <img src="/images/VectorCross.svg" alt="" />
        </div>
        <div className="text-blue font-bold mb-3">
          <big>What token do You use?</big>
        </div>

        <p className="text-white">
          <ul>
            <li>Our NFT’s are all stored as ERC-721 tokens</li>
          </ul>
        </p>
      </div>

      {/* FAQ Box 2 */}
      <div className="TeamNoteBox cursor-pointer mb-3">
        <div className="TeamNoteBox__Button">
          <img src="/images/VectorCross.svg" alt="" />
        </div>
        <div className="text-blue font-bold mb-3">
          <big>Are Your NFT’s hosted?</big>
        </div>

        <p className="text-white">
          <ul>
            <li>Yes, all tokens are IPFS hosted, they are here forever</li>
          </ul>
        </p>
      </div>

      {/* FAQ Box 3 */}
      <div className="TeamNoteBox cursor-pointer mb-3">
        <div className="TeamNoteBox__Button">
          <img src="/images/VectorCross.svg" alt="" />
        </div>
        <div className="text-blue font-bold mb-3">
          <big>What’s the blockchain You use?</big>
        </div>

        <p className="text-white">
          <ul>
            <li>
              We use Polygon Blockchain. Same security, same scalability, but
              less gas fees for You
            </li>
          </ul>
        </p>
      </div>
    </section>
  );
};

export default FAQ;
