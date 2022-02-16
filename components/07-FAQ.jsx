import React, { useState } from "react";
import Collapsible from "react-collapsible";
import Image from "next/image";
import FAQs from "../json/FAQs.json";

const FAQ = () => {
  const [openedTabs, setOpenedTabs] = useState([]);

  return (
    <section className="lg:py-24 py-14">
      <div className="wrapper">
        <div className="flex justify-center items-center md:mb-10 mb-6">
          <div className="TitleDivider_Left" />
          <h1 className="whitespace-nowrap font-bold text-primary sm:mx-7 mx-5 text-center">
            FAQ
          </h1>
          <div className="TitleDivider_Right" />
        </div>

        <div className="flex flex-col sm:gap-4 gap-6">
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
                <div className="flex justify-between sm:items-center font-bold">
                  <big className="text-blue">{faq.title}</big>
                  <div>
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
                <p className="ml-2">
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
      </div>
    </section>
  );
};

export default FAQ;
