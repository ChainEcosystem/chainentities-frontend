import AboutFreedomTitle from "../../public/images/landingPage/About/Freedom.png";
import AboutUniqueTitle from "../../public/images/landingPage/About/DAO.png";
import AboutDAO from "../../public/images/landingPage/About/Unique.png";

import Image from "next/image";

const aboutData = [
  {
    icon: "/images/landingPage/About/About-Unique.svg",
    title: "/images/landingPage/About/Unique.png",
    subtitle: "Exclusive ecosystem",
    description:
      "A unique ecosystem with game, marketplace, native token and sustainable revenue",
  },
  {
    description:
      "An open-world multiplayer play-to-earn game, where everything belong to players",
    icon: "/images/landingPage/About/About-Freedom.svg",
    title: "/images/landingPage/About/Freedom.png",
    subtitle: "P2E Metaverse game",
  },
  {
    description:
      "In-game perfected governance that give players full control other the game politics",
    icon: "/images/landingPage/About/About-DAO.svg",
    title: "/images/landingPage/About/DAO.png",
    subtitle: "Decentralized governance",
  },
];

export default function About() {
  return (
    <section className="AboutSection lg:pb-24 pb-14 relative mt-[-120px]">
      <div className="StarBg" />
      <div className="wrapper">
        <div className="flex justify-center items-center lg:mb-10 mb-4">
          <div className="TitleDivider_Left" />
          <h3 className="text-center text-xl md:text-2xl whitespace-nowrap font-exan sm:mx-7 mx-5 text-transparent bg-clip-text bg-blue-color">
            What is ChainEntities
          </h3>
          <div className="TitleDivider_Right" />
        </div>
        <h3 className="text-center lg:mb-10 mb-6 text-base">
          P2E decentralized virtual-world made with a purpose -
          <br className="md:inline hidden" /> ’DECENTRALIZE IT’
        </h3>
        <div className="grid grid-col-1 md:grid-cols-3 text-white w-full gap-7 lg:gap-20">
          {aboutData?.map(({ icon, title, subtitle, description }) => (
            <AboutCard
              description={description}
              subtitle={subtitle}
              title={title}
              icon={icon}
              key={title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutCard({ icon, title, subtitle, description }) {
  return (
    <div className="col-span-1 flex flex-col">
      <div className="relative xl:mt-3 w-full min-h-[80px] mb-4">
        <Image
          className="pointer-events-none"
          object="cover"
          layout="fill"
          src={title}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-1 items-center p-6 bg-[#2A2630] border-2 border-[#514B5899] rounded-lg h-full">
        <Image
          className="pointer-events-none"
          alt={title}
          height={32}
          width={32}
          src={icon}
        />
        <h4 className="text-lg text-blue-color text-center">{subtitle}</h4>
        <p className="text-base text-center">{description}</p>
      </div>
    </div>
  );
}
