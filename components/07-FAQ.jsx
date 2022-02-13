import React, { useState } from "react";
import Collapsible from "react-collapsible";
import Image from "next/image";
import FAQs from "../json/FAQs.json";

const FAQ = () => {
  const [openedTabs, setOpenedTabs] = useState([]);

  return (
    <section id="faq" className="py-24">
      <div className="flex justify-center items-center md:mb-10 mb-6">
        <div className="TitleDivider_Left" />
        <h1 className="font-bold text-primary mx-7">FAQ</h1>
        <div className="TitleDivider_Right" />
      </div>

      <div className="flex flex-col gap-4">
        {FAQs.map((faq, index) => (
          <Collapsible
            key={`faq${index}`}
            transitionTime={200}
            onOpen={() => {
              setOpenedTabs((prevTabs) => [...prevTabs, index]);
            }}
            onClose={() => {
              setOpenedTabs((prevTabs) =>
                prevTabs.filter((tab) => tab !== index)
              );
            }}
            trigger={
              <div className="flex justify-between items-center font-bold">
                <big className="text-blue">{faq.title}</big>
                <div className="Collapsible__Button">
                  {openedTabs.includes(index) ? (
                    <Image
                      height={22}
                      width={10}
                      src="/images/VectorArrowDown.svg"
                      alt=""
                    />
                  ) : (
                    <Image
                      height={22}
                      width={10}
                      src="/images/VectorArrowUp.svg"
                      alt=""
                    />
                  )}
                </div>
              </div>
            }
          >
            <div className="flex mt-3 transition duration-200">
              <div>
                <div
                  className="relative"
                  style={{ height: "22px", width: "8px" }}
                >
                  <Image
                    src="/images/VectorArrowRightBlue.svg"
                    layout="fill"
                    alt=""
                  />
                </div>
              </div>
              <p className="ml-1">
                {faq.answer}{" "}
                {faq.finalWord && (
                  <span className="text-primary">
                    After all, it&apos;s going to be a fun journey :)
                  </span>
                )}
              </p>
            </div>
          </Collapsible>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
