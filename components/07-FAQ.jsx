import React, { useState } from "react";
import Collapsible from "react-collapsible";
import Image from "next/image";
import FAQs from "../json/FAQs.json";

const FAQ = () => {
  const [openedTab, setOpenedTab] = useState("");

  return (
    <section id="faq" className="py-24">
      <div className="flex justify-center items-center md:mb-10 mb-6">
        <div className="TitleDivider_Left" />
        <h1 className="font-bold text-primary mx-7">FAQ</h1>
        <div className="TitleDivider_Right" />
      </div>

      {FAQs.map((faq, index) => (
        <div
          key={`faq${index}`}
          className="FaqBox cursor-pointer mb-3"
          onClick={() =>
            setOpenedTab((prevTab) => (prevTab === index ? index : ""))
          }
        >
          <Collapsible
            transitionTime={200}
            open={openedTab === index}
            trigger={
              <div className="flex justify-between items-center font-bold">
                <big className="text-blue">{faq.title}</big>
                <div className="FaqBox__Button">
                  {openedTab === index ? (
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
              <p className="ml-1">{faq.answer}</p>
            </div>
          </Collapsible>
        </div>
      ))}
    </section>
  );
};

export default FAQ;
