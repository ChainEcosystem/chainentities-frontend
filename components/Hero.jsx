/* eslint-disable no-useless-escape */
import React, { useState, useEffect } from "react";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import ABI from "../json/abi.json";
// import ABI from "../json/test-abi.json";
import contract from "../json/contract.json";
import socialMedias from "../json/socialMedia.json";
import Image from "next/image";

const Hero = () => {
  const { Moralis, isWeb3Enabled, enableWeb3, web3EnableError } = useMoralis();
  const [mintCount, setMintCount] = useState(1);
  const [totalMinted, setTotalMinted] = useState(0);
  const [notificationState, setNotificationState] = useState({
    show: false,
    type: "success",
  });

  const {
    data: mintData,
    error: mintError,
    fetch: handleMint,
    isFetching: mintIsFetching,
    isLoading: mintIsLoading,
  } = useWeb3ExecuteFunction({
    abi: ABI,
    contractAddress: contract.main.address,
    functionName: "mint",
    msgValue: Moralis.Units.ETH(mintCount * +contract.main.cost),
    params: { _mintAmount: mintCount },
  });

  if (mintData || mintError) {
    console.log({ mintData, mintError });
  }

  const {
    data: totalSupplyData,
    error: totalSupplyError,
    fetch: handleGetTotalSupply,
  } = useWeb3ExecuteFunction({
    abi: ABI,
    contractAddress: contract.main.address,
    functionName: "totalSupply",
  });

  if (totalSupplyData) {
    console.log({ walletData: totalSupplyData, walletError: totalSupplyError });
  }

  function redirectSocialLink(link) {
    if (typeof window === "undefined") {
      return;
    }
    window.open(link, "_blank");
  }

  async function switchToMaticMainnet() {
    const web3 = await Moralis.Web3.enableWeb3();
    try {
      await web3.currentProvider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x89" }],
      });
    } catch (error) {
      if (error.code === 4902) {
        try {
          await web3.currentProvider.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: "0x89",
                chainName: "Matic Mainnet",
                rpcUrls: ["https://rpc-mainnet.maticvigil.com"],
                nativeCurrency: {
                  name: "MATIC",
                  symbol: "MATIC",
                  decimals: 18,
                },
                blockExplorerUrls: ["https://explorer.matic.network"],
              },
            ],
          });
        } catch (err) {
          console.log("@Error: Switching to MATIC mainnet");
          console.log(err);
          setNotificationState({ show: true, type: "error" });
          setTimeout(() => {
            setNotificationState({
              show: false,
              type: "error",
            });
          }, 5000);
        }
      }
    }
  }

  useEffect(() => {
    if (!isWeb3Enabled && !web3EnableError) return;
    setNotificationState({
      show: true,
      type: isWeb3Enabled ? "success" : "error",
    });

    let timeoutId = setTimeout(() => {
      if (!isWeb3Enabled && !web3EnableError) return;
      setNotificationState({
        show: false,
        type: isWeb3Enabled ? "success" : "error",
      });
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [isWeb3Enabled, web3EnableError]);

  useEffect(() => {
    if (!isWeb3Enabled) return;
    console.log("@@@ Getting total supply");
    handleGetTotalSupply({ onSuccess: (data) => setTotalMinted(data) });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isWeb3Enabled]);

  return (
    <>
      <div
        className={`flex justify-center transition duration-300 fixed left-0 z-50 w-full -top-10 transform ${
          notificationState.show ? "translate-y-20" : ""
        } `}
      >
        <div className="flex justify-center items-center py-3 px-4 bg-dark rounded-md">
          {
            <Image
              src={`/images/Vector${
                notificationState.type === "success" ? "Checkmark" : "CrossRed"
              }.svg`}
              className="mr-3"
              alt=""
            />
          }

          <div className="xsmall text-white">
            {notificationState.type === "success"
              ? "Successfully connected to Your wallet"
              : "Not connected to Your wallet"}
          </div>
        </div>
      </div>

      <section className="HeroSection grid grid-cols-2 gap-32 justify-center items-center">
        <div className="flex flex-col justify-center md:items-start items-center md:my-0 my-5 lg:pr-24 md:pr-12">
          <h2 className="font-bold text-primary mb-1 md:text-left text-center">
            ChainEntities - an utopia in the metaverse
          </h2>
          <h1 className="md:text-left text-center">
            The biggest and unique ecosystem in the blockchain gaming industry
          </h1>

          <p className="mt-4 md:text-left text-center">
            Play-to-earn game, marketplace, native token, decentralized
            virtual-world
          </p>

          <div className="sm:flex hidden mt-10 mb-8">
            <button
              className="btn-primary NavItemSpacing"
              onClick={() => {
                redirectSocialLink("https://discord.gg/5qRS9KThV2");
              }}
            >
              Opensea
            </button>
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
              <div
                className="flex justify-center items-center p-3 rounded-full bg-dark"
                key={`heroSocial-${index}`}
              >
                <Image src={`images/Vector${social.name}.svg`} alt="" />
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          {/* Notification - start */}
          {(mintData || mintError || web3EnableError) && (
            <div
              style={{ bottom: "-76px" }}
              className="absolute rounded-lg w-full bg-divider text-white p-4"
            >
              {(mintError || web3EnableError) && (
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
              )}

              {mintData && (
                <span className="mt-1 xsmall">
                  Congratulations! You’ve got Your own Entity
                  <br />
                  Visit{" "}
                  <span
                    className="text-pink cursor-pointer"
                    onClick={() =>
                      redirectSocialLink("https://discord.gg/5qRS9KThV2")
                    }
                  >
                    opensea
                  </span>{" "}
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
              <h2 className="font-bold text-primary mt-3">
                {totalMinted}/4444
              </h2>

              <hr className="MintBox__Divider" />

              <big className="block">
                {mintCount} Entity costs{" "}
                <span className="text-blue">
                  {+mintCount * +contract.main.cost}
                </span>{" "}
                Matic
              </big>
              <small className="text-divider block md:mt-2 mt-1">
                Excluding gas fees
              </small>

              <div className="sm:flex hidden items-center mt-6">
                <div className="MintCount">
                  {/* Minus button */}
                  <div
                    disabled={mintIsFetching || mintIsLoading}
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
                    disabled={mintIsFetching || mintIsLoading}
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

                {/* Mint button */}
                <button
                  disabled={mintIsFetching || mintIsLoading}
                  onClick={async () => {
                    if (isWeb3Enabled) {
                      console.log("@@@ Minting");
                      handleMint({
                        onSuccess: () =>
                          setTotalMinted((count) => +count + +mintCount),
                      });
                    } else {
                      console.log("@@@ Authenticating");
                      enableWeb3();
                    }
                  }}
                  className={`MintBox__MintButton ${
                    mintIsFetching || mintIsLoading
                      ? "bg-divider text-white rounded-lg MintBox__MintButton--loading"
                      : "btn-primary"
                  }`}
                >
                  {mintIsFetching || mintIsLoading ? "...Minting" : "Mint"}
                </button>
              </div>

              {/* Connection warning */}
              <div className="flex items-start mt-5">
                <Image
                  src="/images/VectorCheckmark.svg"
                  className="md:mt-1 mr-3 w-3"
                  alt=""
                />

                <span className="xsmall sm:hidden">
                  Please visit Web version of the site, to mint an Entity
                </span>
                <span className="xsmall sm:block hidden">
                  Please make sure You are connected to the{" "}
                  <span
                    className="transition duration-200 text-pink cursor-pointer hover:text-white"
                    onClick={switchToMaticMainnet}
                  >
                    Polygon Network
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;