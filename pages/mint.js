/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useEffect, useState } from "react";
import HeaderFooterLayout from "../layout/HeaderFooterLayout";
import { ethers } from "ethers";
import {
  useAccount,
  useConnect,
  useSwitchNetwork,
  useNetwork,
  useContractWrite,
  usePrepareContractWrite,
  useContractRead,
} from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import mainContract from "../json/mainContract.json";
const buttonGradient =
  "linear-gradient(90deg, #7AD1EC 0%, #78C6ED 6.25%, #76BAEE 12.5%, #74AEEF 18.75%, #72A1F0 25%, #7094F2 31.25%, #6E85F3 37.5%, #6C77F4 43.75%, #6D6AF5 50%, #7868F6 56.25%, #8566F7 62.5%, #9264F9 68.75%, #A062FA 75%, #AF5FFB 81.25%, #BE5DFC 87.5%, #CE5BFE 93.75%, #DE59FF 100%)";

export default function Mint() {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#1F1B25" />
        <title>ChainEntities - an utopia in the metaverse</title>
        <meta
          name="description"
          content="Play-to-earn decentralized virtual-world, marketplace, native token"
        />
        <link rel="icon" href="/images/Logo.svg" />
      </Head>
      <HeaderFooterLayout>
        <main className="ContentContainer  mt-16 md:mt-20 relative">
          <div className="StarBg" />
          <div className="md:max-w-7xl m-auto p-4 md:p-9 grid grid-cols-1 md:grid-cols-2 h-full gap-4 md:gap-6">
            <div className="block md:hidden">
              <TicketSection />
            </div>
            <DescriptionSection />
            <div className="hidden md:block">
              <TicketSection />
            </div>
            <ImageSection />
          </div>
        </main>
      </HeaderFooterLayout>
    </>
  );
}

const useCounter = ({ min, max, initialValue }) => {
  const [value, setValue] = useState(initialValue || 0);
  const increment = () => setValue((p) => Math.min(p + 1, max));
  const decrement = () => setValue((p) => Math.max(p - 1, min));
  return {
    disableIncrement: max ? value + 1 > max : false,
    disableDecrement: value - 1 < min,
    increment,
    decrement,
    value,
  };
};

function TicketSection({
  mintSupply = "200 / 4444", // needs to be dynamic
  mintPrice = "59 Matic",
  totalSupply = "4444",
}) {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { chain } = useNetwork();
  const { switchNetwork, isLoading } = useSwitchNetwork();
  const { value, increment, decrement } = useCounter({
    initialValue: 1,
    max: 11,
    min: 1,
  });

  const { data: supplyData } = useContractRead({
    address: mainContract.address,
    abi: mainContract.ABI,
    functionName: "totalSupply",
  });

  const { config } = usePrepareContractWrite({
    address: mainContract.address,
    abi: mainContract.ABI,
    chainId: 137,
    functionName: "mint",
    overrides: {
      value: ethers.utils.parseEther(String(+mainContract.cost * value)),
      gasLimit: 1300000,
    },
    args: [value],
  });
  const {
    write: mint,
    isSuccess: isMintSuccess,
    error,
  } = useContractWrite(config);

  async function buttonFunction() {
    if (!isConnected) {
      connect();
      return;
    }

    mint?.();
  }

  useEffect(() => {
    if (isConnected && switchNetwork && chain?.id !== 137) {
      switchNetwork(137);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chain, isConnected]);

  return (
    <div className="MintPage col-span-1">
      <div className="StarBg" />
      <div className="bg-[#514B58] border-[#3F3A45] border rounded-lg">
        <div className=" bg-[#2A2630] rounded-lg z-[-100]">
          <div
            className="p-[1px] rounded-lg text-center"
            style={{
              background:
                "linear-gradient(90deg, #7AD1EC 0%, #78C6ED 6.25%, #76BAEE 12.5%, #74AEEF 18.75%, #72A1F0 25%, #7094F2 31.25%, #6E85F3 37.5%, #6C77F4 43.75%, #6D6AF5 50%, #7868F6 56.25%, #8566F7 62.5%, #9264F9 68.75%, #A062FA 75%, #AF5FFB 81.25%, #BE5DFC 87.5%, #CE5BFE 93.75%, #DE59FF 100%)",
            }}
          >
            <div className="bg-[#3F3A45] p-5 rounded-lg">
              <h3 className="text-center text-xl md:text-2xl whitespace-nowrap font-exan text-transparent bg-clip-text bg-blue-color">
                MINT TICKET
              </h3>
            </div>
          </div>
          <div className="p-8">
            <div className="flex flex-col space-y-8">
              <div className="flex flex-row divide-x divide-[#514B58]">
                {[
                  { title: "Total Supply:", value: totalSupply },
                  {
                    title: "Mint Supply:",
                    value: supplyData
                      ? `${parseInt(supplyData)} / 4444`
                      : mintSupply,
                  },
                  { title: "Mint Price:", value: mintPrice },
                ].map(({ title, value }, i) => (
                  <div
                    className="flex-1 text-center flex flex-col space-y-1 text-sm md:text-base"
                    key={i}
                  >
                    <div>{title}</div>
                    <div className="text-[#7AD1EC]">{value}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col space-y-6">
                <div className="flex flex-row items-center bg-[#675D78] p-1 rounded-lg h-[55px]">
                  <button
                    style={{ background: buttonGradient }}
                    className="flex-1 h-full rounded-lg p-[1px]"
                    onClick={decrement}
                  >
                    <div className="bg-[#2A2630] h-full rounded-lg flex items-center justify-center">
                      <img src="/images/mint/Minus.svg" alt="minus" />
                    </div>
                  </button>
                  <div className="flex-1 text-center font-bold text-2xl">
                    {value}
                  </div>
                  <button
                    style={{ background: buttonGradient }}
                    className="flex-1 h-full rounded-lg p-[1px]"
                    onClick={increment}
                  >
                    <div className="bg-[#2A2630] h-full rounded-lg flex items-center justify-center">
                      <img src="/images/mint/Add.svg" alt="plus" />
                    </div>
                  </button>
                </div>
                <button
                  // disabled={isConnected && !write}
                  className="text-base text-white py-4 rounded-lg hover:opacity-80 duration-200 w-full"
                  style={{ background: buttonGradient }}
                  onClick={buttonFunction}
                >
                  {isConnected ? "Mint" : "Connect Wallet"}
                </button>
              </div>
              <div className="flex flex-row md:items-center items-start space-x-3.5">
                <img src="/images/landingPage/Roadmap/Done.svg" alt="" />
                <div>
                  Please make sure You are connected to the{" "}
                  <span className="text-[#DE59FF]">Polygon Network</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[rgb(81,75,88)] rounded-b-lg w-full">
          {isMintSuccess ? (
            <div className="p-4">
              Congratulations! You’ve got your own Entity Visit{" "}
              <span className="text-[#DE59FF]">opensea</span> to view it!
            </div>
          ) : null}

          {/* <div className="p-4">
          Insufficient funds. To mint a ticket top-up your wallet with at least
          <span className="text-[#7AD1EC] ml-2">
            {+mainContract.cost * value} MATIC + gas
          </span>
        </div> */}
        </div>
      </div>
    </div>
  );
}

function DescriptionSection() {
  return (
    <div className="col-span-1 border border-[#514B58] bg-[#2A2630] p-6 rounded-lg">
      <div className="flex flex-col space-y-6">
        <img src="/images/mint/cyber_island.png" alt="cyber-island" />
        <div className="flex flex-col space-y-4">
          <div className="text-xl">ChainEntities</div>
          <div>
            <div>
              ChainEntities is P2E decentralized virtual-world with a open-world
              map. A whole ecosystem is being build - native token, internal
              marketplace, DAO. Mint your NFT now to get your access ticket and
              explore the endless metaverse of
            </div>

            <span className="text-[#7AD1EC]">
              Entity Eden<span className="text-white">.</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImageSection() {
  return (
    <div className="col-span-1 md:col-span-2 grid grid-cols-2 md:grid-cols-7 gap-3">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div className="aspect-square rounded-lg" key={item}>
          <img
            src={`/images/mint/icon${item}.svg`}
            className="rounded-lg w-full h-full"
            alt={`icon${item}`}
          />
        </div>
      ))}
      <div className="aspect-square rounded-lg hidden md:block">
        <img
          src={`/images/mint/icon7.svg`}
          className="rounded-lg w-full h-full"
          alt={`icon7`}
        />
      </div>
    </div>
  );
}
