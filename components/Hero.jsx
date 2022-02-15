import React, { useState, useEffect } from "react";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import contract from "../json/contract.json";
import socialMedias from "../json/socialMedia.json";
import Image from "next/image";

const Hero = () => {
  const env = "main";

  const { Moralis, isInitialized } = useMoralis();

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
        contractAddress: contract[env].address,
        abi: contract[env].ABI,
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
        contractAddress: contract[env].address,
        functionName: "mint",
        abi: contract[env].ABI,
        msgValue: Moralis.Units.ETH(mintCount * +contract[env].cost),
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

      <section className="HeroSection">
        <div className="container mx-auto grid grid-cols-2 xl:gap-32 justify-center items-center">
          <div className="flex flex-col justify-center md:items-start items-center md:my-0 my-5">
            <big className="text-primary mb-1 md:text-left text-center">
              ChainEntities - an utopia in the metaverse
            </big>
            <div
              className="md:text-left text-center"
              style={{ fontSize: "37px", lineHeight: "37px" }}
            >
              The biggest and unique ecosystem in the blockchain gaming industry
            </div>

            <div
              className="mt-4 md:text-left text-center"
              style={{ fontSize: "22px", lineHeight: "22px" }}
            >
              Play-to-earn decentralized virtual-world,
              <br /> marketplace, native token.
            </div>

            <div className="sm:flex hidden mt-10 mb-8">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://opensea.io/collection/chainentities"
                className="btn-primary NavItemSpacing"
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

            <div className="flex gap-5">
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

          <div className="relative flex justify-end">
            {/* Notification - start */}
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
            {/* Notification - end */}

            <div className="MintBoxContainer">
              <div className="MintBox">
                <big className="block">ChainEntities Minted</big>

                {/* Minted count */}
                <span className="font-bold text-primary mt-3 text-4xl">
                  {connectedWallet ? publicTotalMinted : "-"}/4444
                </span>

                <hr className="MintBox__Divider" />

                <big className="block">
                  {mintCount} Entity costs{" "}
                  <span className="text-blue">
                    {+mintCount * +contract[env].cost}
                  </span>{" "}
                  Matic
                </big>
                <small className="text-divider block mt-1">
                  Excluding gas fees
                </small>

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
                <div className="flex items-start mt-4">
                  <div className="mr-3">
                    <Image
                      height={22}
                      width={25}
                      src="/images/VectorCheckmark.svg"
                      alt=""
                    />
                  </div>

                  <span className="xsmall sm:hidden">
                    Please visit Web version of the site, to mint an Entity
                  </span>
                  <span className="xsmall sm:block hidden">
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
