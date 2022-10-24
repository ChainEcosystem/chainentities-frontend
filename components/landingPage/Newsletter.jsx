import Image from "next/image";
const buttonGradient =
  "linear-gradient(90deg, #7AD1EC 0%, #78C6ED 6.25%, #76BAEE 12.5%, #74AEEF 18.75%, #72A1F0 25%, #7094F2 31.25%, #6E85F3 37.5%, #6C77F4 43.75%, #6D6AF5 50%, #7868F6 56.25%, #8566F7 62.5%, #9264F9 68.75%, #A062FA 75%, #AF5FFB 81.25%, #BE5DFC 87.5%, #CE5BFE 93.75%, #DE59FF 100%)";

export default function Newsletter() {
  return (
    <section className="mb-20 md:mb-28 relative">
      <div className="absolute md:left-0 left-[-10px] top-[-130px] z-0 ">
        <Image
          src={"/images/landingPage/Newsletter/NewsletterTicket.png"}
          objectFit="cover"
          height={300}
          width={300}
          alt=""
        />
      </div>
      <div className="wrapper z-20">
        <div
          className="p-[2px] rounded-lg"
          style={{
            background:
              "linear-gradient(90deg, #7AD1EC 0%, #78C6ED 6.25%, #76BAEE 12.5%, #74AEEF 18.75%, #72A1F0 25%, #7094F2 31.25%, #6E85F3 37.5%, #6C77F4 43.75%, #6D6AF5 50%, #7868F6 56.25%, #8566F7 62.5%, #9264F9 68.75%, #A062FA 75%, #AF5FFB 81.25%, #BE5DFC 87.5%, #CE5BFE 93.75%, #DE59FF 100%)",
          }}
        >
          <div className="bg-[url('/images/landingPage/Newsletter/newsletter-bg.png')] h-[410px] bg-cover rounded-lg">
            <div className="w-full h-full flex flex-col justify-center items-center space-y-8 p-4">
              <h1 className="whitespace-nowrap font-bold sm:mx-7 mx-5 text-center text-xl md:text-2xl text-blue-color font-exan">
                Subscribe to our <br className="block md:hidden" />
                newsletter
              </h1>
              <h3 className="text-center text-base">
                Be the first to get exclusive news and offers on the product
                <br className="hidden md:block" />
                directly in your inbox
              </h3>
              <div className="flex flex-col space-y-3 w-full">
                <div className="text-black bg-white p-0 md:p-[4px] w-full md:w-[487px] flex flex-row m-auto rounded-lg">
                  <input
                    className="outline-none border-none py-3 px-5 w-full rounded-lg"
                    placeholder="example@gmail.com"
                    type={"text"}
                  />
                  <button
                    className="text-base text-white py-3 px-6 rounded-lg hidden md:block hover:opacity-80 duration-200"
                    style={{ background: buttonGradient }}
                  >
                    Subscribe
                  </button>
                </div>
                <button
                  className="text-base text-white py-3 px-6 rounded-lg md:hidden block hover:opacity-80 duration-200"
                  style={{ background: buttonGradient }}
                >
                  Subscribe
                </button>

                <h3
                  className="text-center text-base"
                  style={{ color: "#B8AEC7" }}
                >
                  *We promise not to spam you
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
