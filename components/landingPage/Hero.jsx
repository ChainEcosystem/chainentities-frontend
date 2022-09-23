import Image from "next/image";
const buttonGradient =
  "linear-gradient(90deg, #7AD1EC 0%, #78C6ED 6.25%, #76BAEE 12.5%, #74AEEF 18.75%, #72A1F0 25%, #7094F2 31.25%, #6E85F3 37.5%, #6C77F4 43.75%, #6D6AF5 50%, #7868F6 56.25%, #8566F7 62.5%, #9264F9 68.75%, #A062FA 75%, #AF5FFB 81.25%, #BE5DFC 87.5%, #CE5BFE 93.75%, #DE59FF 100%)";

export default function Hero() {
  return (
    <section className="HeroSection relative lg:pb-24 pb-14 ">
      <div className="h-[566px] w-full opacity-30 z-10">
        <Image layout="fill" src={"/images/landingPage/Hero/render_hero.jpg"} />
      </div>
      <div
        className="z-20 absolute left-0 top-0 w-full h-full"
        style={{
          background:
            "radial-gradient(75.18% 75.18% at 50% 24.82%, rgba(0, 0, 0, 0) 0%, #1F1B25 100%)",
        }}
      />
      <div className="opacity-100 absolute top-0 left-0 w-full h-full flex flex-row items-center justify-center z-30">
        <div className="flex flex-col gap-y-8 items-center">
          <h2 className="text-center whitespace-nowrap font-exan text-2xl md:text-[40px] text-transparent bg-clip-text bg-pink-color tracking-[0.4em]">
            ChainEntities
          </h2>
          <h3 className="text-center whitespace-nowrap font-exan text-base text-transparent bg-clip-text bg-blue-color tracking-[0.4em]">
            an utopia in <br className="block md:hidden" />
            the metaverse
          </h3>
          <button
            className="text-base text-white py-3 px-6 rounded-lg hover:opacity-80 duration-200 w-fit mt-4"
            style={{ background: buttonGradient }}
          >
            Mint Page
          </button>
        </div>
      </div>
    </section>
  );
}
