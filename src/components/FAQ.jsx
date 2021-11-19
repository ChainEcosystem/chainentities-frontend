import React, { useState } from "react";
import Collapsible from "react-collapsible";

const FAQ = () => {
  const [isOpened1, setIsOpened1] = useState(false),
    [isOpened2, setIsOpened2] = useState(false),
    [isOpened3, setIsOpened3] = useState(false);

  return (
    <section id="faq" className="py-20">
      <div className="flex justify-center items-center mb-10">
        <div className="TitleDivider_Left" />
        <h1 className="font-bold text-primary mx-7">FAQ</h1>
        <div className="TitleDivider_Right" />
      </div>

      {/* FAQ Box 1 */}
      <div
        className="FaqBox cursor-pointer mb-3"
        onClick={() => setIsOpened1((open) => !open)}
      >
        <Collapsible
          transitionTime={200}
          onOpen={() => {
            if (!isOpened1) setIsOpened1(true);
          }}
          onClose={() => {
            if (isOpened1) setIsOpened1(false);
          }}
          open={isOpened1}
          trigger={
            <div className="flex justify-between items-center text-blue font-bold">
              <big>What token do You use?</big>
              <div
                className={`FaqBox__Button ${
                  isOpened1 && "FaqBox__Button--active"
                }`}
              >
                <img src="/images/VectorCross.svg" alt="" />
              </div>
            </div>
          }
        >
          <div className="text-white mt-3 transition duration-200">
            <ul>
              <li>
                <p>Our NFT’s are all stored as ERC-721 tokens</p>
              </li>
            </ul>
          </div>
        </Collapsible>
      </div>

      {/* FAQ Box 2 */}
      <div
        className="FaqBox cursor-pointer mb-3"
        onClick={() => setIsOpened2((open) => !open)}
      >
        <Collapsible
          transitionTime={200}
          onOpen={() => {
            if (!isOpened2) setIsOpened2(true);
          }}
          onClose={() => {
            if (isOpened2) setIsOpened2(false);
          }}
          open={isOpened2}
          trigger={
            <div className="flex justify-between items-center text-blue font-bold">
              <big>Are Your NFT’s hosted?</big>
              <div
                className={`FaqBox__Button ${
                  isOpened2 && "FaqBox__Button--active"
                }`}
              >
                <img src="/images/VectorCross.svg" alt="" />
              </div>
            </div>
          }
        >
          <div className="text-white mt-3 transition duration-200">
            <ul>
              <li>
                <p>Yes, all tokens are IPFS hosted, they are here forever</p>
              </li>
            </ul>
          </div>
        </Collapsible>
      </div>

      {/* FAQ Box 3 */}
      <div
        className="FaqBox cursor-pointer mb-3"
        onClick={() => setIsOpened3((open) => !open)}
      >
        <Collapsible
          transitionTime={200}
          onOpen={() => {
            if (!isOpened3) setIsOpened3(true);
          }}
          onClose={() => {
            if (isOpened3) setIsOpened3(false);
          }}
          open={isOpened3}
          trigger={
            <div className="flex justify-between items-center text-blue font-bold">
              <big>What’s the blockchain You use?</big>
              <div
                className={`FaqBox__Button ${
                  isOpened3 && "FaqBox__Button--active"
                }`}
              >
                <img src="/images/VectorCross.svg" alt="" />
              </div>
            </div>
          }
        >
          <div className="text-white mt-3 transition duration-200">
            <ul>
              <li>
                <p>
                  We use Polygon Blockchain. Same security, same scalability,
                  but less gas fees for You
                </p>
              </li>
            </ul>
          </div>
        </Collapsible>
      </div>
    </section>
  );
};

export default FAQ;
