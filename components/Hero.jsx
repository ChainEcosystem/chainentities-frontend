import React, { useState } from "react";
import { useMoralis } from "react-moralis";
import contract from "../json/mainContract.json";
import socialMedias from "../json/socialMedia.json";
import Image from "next/image";

const Hero = () => {
  const { Moralis } = useMoralis();

  // Connection
  const [publicTotalMinted, setPublicTotalMinted] = useState(0);
  const [isConnectingWallet, setIsConnectingWallet] = useState(false);
  const [connectedWallet, setConnectedWallet] = useState(false);
  const [showCountControl, setShowCountControl] = useState(false);
  const [connectionNotification, setConnectionNotification] = useState({
    show: false,
    type: "success",
  });

  // Mint
  const [isMinting, setIsMinting] = useState(false);
  const [mintCount, setMintCount] = useState(1);
  const [mintBoxMsg, setMintBoxMsg] = useState({
    show: false,
    type: "error",
  });

  const [hoveredSocial, setHoveredSocial] = useState("");

  async function handleConnectWallet() {
    setIsConnectingWallet(true);
    try {
      const web3 = await Moralis.enableWeb3();
      await Moralis.authenticate({
        signingMessage: "Authenticate on ChainEntities",
      });

      // Switch chain if not on MATIC
      if (![137, "0x89"].includes(web3._network.chainId)) {
        await Moralis.switchNetwork(137);
      }

      const result = await Moralis.executeFunction({
        contractAddress: contract.address,
        abi: contract.ABI,
        functionName: "totalSupply",
      });

      setPublicTotalMinted(parseInt(result._hex));
      setConnectedWallet(true);
      _showConnectionNotification("success");
      setTimeout(() => {
        setShowCountControl(true);
      }, 200);
    } catch (err) {
      setIsConnectingWallet(false);
      _connectionErrHandling(err);
    }
  }

  function _showConnectionNotification(type) {
    setConnectionNotification({ show: true, type });
    setTimeout(() => {
      setConnectionNotification({
        show: false,
        type,
      });
    }, 5000);
  }

  function _connectionErrHandling(err) {
    if (err.code === 4001) return;
    _showConnectionNotification("error");
    console.log(err);
  }

  async function handleMint() {
    setIsMinting(true);
    try {
      await Moralis.executeFunction({
        contractAddress: contract.address,
        functionName: "mint",
        abi: contract.ABI,
        msgValue: Moralis.Units.ETH(mintCount * +contract.cost),
        params: { _mintAmount: mintCount },
      });
    } catch (err) {
      setIsMinting(false);
      _mintBoxErrHandling(err);
    }
  }

  function _showMintBoxMsg(type) {
    setMintBoxMsg({ show: true, type });
  }

  function _mintBoxErrHandling(err) {
    if (err.code === 4001) return;
    _showMintBoxMsg("error");
    console.log(err);
  }

  return (
    <>
      {/* Notification - start */}
      <div
        className={`flex justify-center transition duration-300 fixed left-0 z-50 w-full -top-10 transform ${
          connectionNotification.show ? "translate-y-20" : ""
        } `}
      >
        <div className="flex justify-center items-center py-3 px-4 bg-dark rounded-md">
          <div className="mr-3 flex items-center">
            <Image
              height={15}
              width={18}
              src={`/images/Vector${
                connectionNotification.type === "success"
                  ? "Checkmark"
                  : "CrossRed"
              }.svg`}
              alt=""
            />
          </div>

          <div className="xsmall text-white">
            {connectionNotification.type === "success"
              ? "Successfully connected to Your wallet"
              : "Not connected to Your wallet"}
          </div>
        </div>
      </div>
      {/* Notification - end */}

      <section className="HeroSection relative lg:pt-14 pt-5">
        <div className="StarBg" />
        <div className="wrapper grid lg:grid-cols-2 grid-cols-1 xl:gap-32 justify-center items-center">
          <div className="lg:text-left text-center flex flex-col justify-center lg:items-start items-center">
            <big className="text-primary lg:mb-1 mb-4">
              ChainEntities - an utopia in the metaverse
            </big>
            <h2>
              The biggest and unique ecosystem in the blockchain gaming industry
            </h2>

            <div className="sm:block hidden mt-4 lsmall">
              Play-to-earn decentralized virtual-world,
              <br /> marketplace, native token.
            </div>

            <p className="sm:hidden mt-4">
              Play-to-earn decentralized virtual-world, marketplace, native
              token.
            </p>

            <div className="sm:flex hidden lg:mt-10 mt-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://opensea.io/collection/chainentities"
                className="btn-primary mr-6"
              >
                Opensea
              </a>
              <a
                href="/files/litepaper.pdf"
                target="_blank"
                className="btn-secondary"
              >
                Litepaper
              </a>
            </div>

            <div className="lg:flex hidden gap-5 mt-8">
              {socialMedias.map((social, index) => (
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={social.link}
                  onMouseEnter={() => setHoveredSocial(social.name)}
                  onMouseLeave={() => setHoveredSocial("")}
                  key={`heroSocial-${index}`}
                >
                  <Image
                    height={42}
                    width={41}
                    src={`/images/Hero${social.name}${
                      social.name === hoveredSocial ? "Color" : ""
                    }.svg`}
                    alt=""
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="relative flex lg:justify-end justify-center">
            {/* Mint Box Message - start */}
            {mintBoxMsg.show && (
              <div
                style={{ bottom: "-76px" }}
                className="absolute rounded-lg w-full bg-divider text-white p-4"
              >
                {mintBoxMsg.type === "error" ? (
                  <span className="mt-1 xsmall">
                    Sorry, something went wrong,{" "}
                    <span
                      className="text-pink transition duration-200 cursor-pointer hover:text-white"
                      onClick={() => {
                        if (typeof window === "undefined") {
                          return;
                        }
                        window.location.reload();
                      }}
                    >
                      refresh
                    </span>{" "}
                    the page and try again!
                  </span>
                ) : (
                  <span className="mt-1 xsmall">
                    Congratulations! You’ve got Your own Entity
                    <br />
                    Visit{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://opensea.io/collection/chainentities"
                      className="text-pink cursor-pointer"
                    >
                      opensea
                    </a>{" "}
                    to view it!
                  </span>
                )}
              </div>
            )}
            {/* Mint Box Message - end */}

            <div className="MintBoxContainer lg:mt-0 mt-6">
              <div className="MintBox">
                <big className="sm:block hidden">ChainEntities Minted</big>

                {/* Minted count */}
                <span className="sm:block hidden font-bold text-primary mt-3 text-4xl">
                  {connectedWallet ? publicTotalMinted : "-"}/4444
                </span>

                <hr className="MintBox__Divider sm:block hidden" />

                <big className="block">
                  {mintCount} Entity costs{" "}
                  <span className="text-blue">
                    {+mintCount * +contract.cost}
                  </span>{" "}
                  Matic
                </big>

                <hr className="MintBox__Divider sm:hidden block" />

                <div className="sm:hidden flex">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://opensea.io/collection/chainentities"
                    className="btn-primary mr-5"
                  >
                    Opensea
                  </a>
                  <a
                    href="/files/litepaper.pdf"
                    target="_blank"
                    className="btn-secondary"
                  >
                    Litepaper
                  </a>
                </div>

                <span className="lsmall text-divider sm:block hidden mt-1">
                  Excluding gas fees
                </span>

                <div className="sm:flex hidden items-center mt-8">
                  <>
                    {showCountControl && (
                      <div className="MintCount">
                        {/* Minus button */}
                        <div
                          className="MintCount__Button"
                          onClick={() => {
                            setMintCount((prevCount) => {
                              if (prevCount <= 1) return prevCount;
                              return prevCount - 1;
                            });
                          }}
                        >
                          <div className="MintCount__ButtonInner">
                            <big className="text-primary">-</big>
                          </div>
                        </div>

                        {/* Mint counter */}
                        <div className="MintCount__Indicator">
                          <big>{mintCount}</big>
                        </div>

                        {/* Plus button */}
                        <div
                          className="MintCount__Button"
                          onClick={() => {
                            setMintCount((prevCount) => {
                              if (prevCount >= 13) return prevCount;
                              return prevCount + 1;
                            });
                          }}
                        >
                          <div className="MintCount__ButtonInner">
                            <big className="text-primary">+</big>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Mint button */}
                    <button
                      onClick={
                        connectedWallet ? handleMint : handleConnectWallet
                      }
                      disabled={
                        connectedWallet ? isMinting : isConnectingWallet
                      }
                      className={`${
                        connectedWallet ? "MintBox__MintButton" : "w-full"
                      } btn-primary`}
                    >
                      {connectedWallet ? (
                        <>{isMinting ? "...Minting" : "Mint"}</>
                      ) : (
                        <>
                          {isConnectingWallet
                            ? "...Connecting"
                            : "Connect Wallet"}
                        </>
                      )}
                    </button>
                  </>
                </div>

                {/* Connection warning */}
                <div className="sm:flex hidden items-start mt-4">
                  <div className="mr-3">
                    <Image
                      height={22}
                      width={25}
                      src="/images/VectorCheckmark.svg"
                      alt=""
                    />
                  </div>

                  <span className="xsmall">
                    Please make sure You are connected to the{" "}
                    <span
                      className="transition duration-200 text-pink cursor-pointer hover:text-white"
                      onClick={async () => {
                        await Moralis.switchNetwork(137);
                      }}
                    >
                      Polygon Network
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
