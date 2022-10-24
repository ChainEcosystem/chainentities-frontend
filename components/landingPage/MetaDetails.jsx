import Image from "next/image";
import { useState } from "react";

const metaDetails = [
  {
    backgroundImage:
      "bg-[url('/images/landingPage/MetaDetails/metaverse.png')]",
    iconImage: "/images/landingPage/MetaDetails/metaverse-icon.png",
    description:
      "ChainEntities metaverse map episode 1 is going to be divided in two regions - The City and Outside the city territory. It is not limited to just one realm - an endless exploration is being prepared",
    imageSize: { width: 139, height: 82 },
    title: "METAVERSE MAP",
    id: 0,
  },
  {
    iconImage: "/images/landingPage/MetaDetails/2D-ticket-icon.png",
    backgroundImage:
      "bg-[url('/images/landingPage/MetaDetails/2D-ticket.png')]",
    description:
      "2D Pixel tickets are access IDs for the metaverse world. Every progress is stored under the token ID of a specific NFT.",
    imageSize: { width: 82, height: 82 },
    title: "2D TICKETS",
    id: 1,
  },
  {
    iconImage: "/images/landingPage/MetaDetails/your-avatar-icon.png",
    backgroundImage:
      "bg-[url('/images/landingPage/MetaDetails/your-avatar.png')]",
    description:
      "2D Pixel tickets has certain traits (such as shoes, pants, race, gender, etc.) that will be carried in the metaverse to a 3D model in the form of the same traits.",
    imageSize: { width: 82, height: 82 },
    title: "YOUR AVATAR",
    id: 2,
  },
];

export function MetaDetails() {
  const [selectedID, setSelectedID] = useState(0);

  return (
    <section className="AboutSection lg:pb-24 pb-14 relative">
      <div className="absolute left-0 top-[-180px] md:top-[-200px] z-0">
        <Image
          src={"/images/landingPage/MetaDetails/MetaDetailsTicket.png"}
          objectFit="cover"
          height={300}
          width={300}
          alt=""
        />
      </div>
      <div className="StarBg" />
      <div className="wrapper z-20">
        <div className="flex justify-center items-center mb-10">
          <div className="TitleDivider_Left" />
          <h3 className="text-center text-xl md:text-2xl whitespace-nowrap font-exan sm:mx-7 mx-5 text-transparent bg-clip-text bg-blue-color">
            Meta-details
          </h3>
          <div className="TitleDivider_Right" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
          {metaDetails?.map(
            ({
              id,
              title,
              description,
              backgroundImage,
              iconImage,
              imageSize,
            }) => (
              <MetaCard
                onClick={() => setSelectedID(id)}
                backgroundImage={backgroundImage}
                selected={id === selectedID}
                description={description}
                imageSize={imageSize}
                iconImage={iconImage}
                title={title}
                key={id}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}

function MetaCard({
  backgroundImage,
  description,
  imageSize,
  iconImage,
  selected,
  onClick,
  title,
}) {
  const unselectedStyle = "col-span-1 md:col-span-3";
  const selectedStyle = "col-span-1 md:col-span-4";
  return (
    <div
      className={`${
        selected ? selectedStyle : unselectedStyle
      } min-h-[268px] p-[2px] rounded-lg`}
      style={{
        background:
          "linear-gradient(90deg, #7AD1EC 0%, #78C6ED 6.25%, #76BAEE 12.5%, #74AEEF 18.75%, #72A1F0 25%, #7094F2 31.25%, #6E85F3 37.5%, #6C77F4 43.75%, #6D6AF5 50%, #7868F6 56.25%, #8566F7 62.5%, #9264F9 68.75%, #A062FA 75%, #AF5FFB 81.25%, #BE5DFC 87.5%, #CE5BFE 93.75%, #DE59FF 100%)",
      }}
    >
      <div
        className={`h-full cursor-pointer transition-all duration-300 ease-in-out rounded-lg p-2.5 bg-transparent  bg-black`}
        onClick={onClick}
      >
        {!selected && (
          <div
            className={`bg-cover ${backgroundImage} h-full p-5 rounded-lg flex flex-col relative`}
          >
            <div className="absolute top-0 left-0 rounded-t-lg w-full text-center p-4 backdrop-blur bg-[#DE59FFB2]/30">
              <h4 className="font-jost text-blue-color text-lg">{title}</h4>
            </div>
          </div>
        )}
        {selected && (
          <div className={`bg-cover ${backgroundImage} h-full rounded-lg`}>
            <div className="h-full w-full flex flex-col bg-black bg-opacity-60 p-5 rounded-lg">
              <h4 className="font-jost text-blue-color mb-3 text-lg fadeIn">
                {title}
              </h4>
              <p className="text-base min-h-[100px] fadeIn">{description}</p>
              <div className="pt-4 fadeIn">
                <Image {...imageSize} src={iconImage} alt="" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
