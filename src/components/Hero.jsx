/* eslint-disable no-useless-escape */
import React, { useState, useEffect } from "react";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
// import ABI from "../json/abi.json";
import TEST_ABI from "../json/test-abi.json";
import address from "../json/address.json";

const Hero = () => {
  const { user, Moralis, isWeb3Enabled, enableWeb3, web3EnableError } =
    useMoralis();
  const [mintCount, setMintCount] = useState(1);
  const [isOnMobile, setIsOnMobile] = useState(false);
  const [totalMinted, setTotalMinted] = useState(0);

  const {
    data: mintData,
    error: mintError,
    fetch: handleMint,
    isFetching: mintIsFetching,
    isLoading: mintIsLoading,
  } = useWeb3ExecuteFunction({
    abi: TEST_ABI,
    contractAddress: address.test,
    functionName: "mint",
    msgValue: Moralis.Units.ETH((mintCount * 0.0001).toFixed(4)),
    params: { _mintAmount: mintCount },
  });

  if (mintData || mintError) {
    console.log({ mintData, mintError });
  }

  const {
    data: walletData,
    error: walletError,
    fetch: handleGetWallet,
  } = useWeb3ExecuteFunction({
    abi: TEST_ABI,
    contractAddress: address.test,
    functionName: "balanceOf",
    params: {
      owner: user?.attributes?.ethAddress,
    },
  });

  if (walletData) {
    console.log({ walletData, walletError });
  }

  function redirectSocialLink(link) {
    window.open(link, "_blank");
  }

  useEffect(() => {
    if (isWeb3Enabled) alert("Successfully connected to Web3!");
  }, [isWeb3Enabled]);

  useEffect(() => {
    function handleCheckIsMobile() {
      const userAgent =
        navigator.userAgent || navigator.vendor || window.opera.substr(0, 4);
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
          userAgent
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          userAgent
        )
      ) {
        setIsOnMobile(true);
      }
    }

    window.addEventListener("load", handleCheckIsMobile);

    return () => window.removeEventListener("load", handleCheckIsMobile);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!user?.attributes?.ethAddress || !isWeb3Enabled) {
      return;
    }
    console.log("@@@ Getting wallet of user");
    handleGetWallet({ onSuccess: (data) => setTotalMinted(data) });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.attributes?.ethAddress, isWeb3Enabled]);

  return (
    <section className="HeroSection">
      <div className="flex flex-col justify-center md:items-start items-center md:my-0 my-5 lg:pr-24 md:pr-12">
        <h2 className="font-bold text-primary mb-1 md:text-left text-center">
          ChainEntities make You styled
        </h2>
        <h1 className="md:text-left text-center">
          Data's limited, rush for Your <br className="sm:block hidden" />
          unique token
        </h1>

        <p className="mt-3 md:text-left text-center">
          The time when everyone and everything <br /> lives on blockchain is
          here.
        </p>

        {!isOnMobile && (
          <div className="flex mt-5">
            <button
              className="btn-primary NavItemSpacing"
              onClick={() => {
                redirectSocialLink("https://discord.gg/5qRS9KThV2");
              }}
            >
              Opensea
            </button>
            <button
              className="btn-secondary"
              onClick={() => {
                redirectSocialLink("https://discord.gg/5qRS9KThV2");
              }}
            >
              Discord
            </button>
          </div>
        )}
      </div>

      <div className="relative">
        {(mintData || mintError || web3EnableError) && (
          <div
            style={{ bottom: "-76px" }}
            className="absolute rounded-lg w-full bg-divider text-white p-4"
          >
            {(mintError || web3EnableError) && (
              <span className="mt-1 xsmall">
                Sorry, something went wrong,{" "}
                <span
                  className="text-pink cursor-pointer"
                  onClick={() => window.location.reload()}
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

        <div
          className="MintBoxContainer"
          style={{ ...(isOnMobile ? { height: "233px" } : {}) }}
        >
          <div className="MintBox">
            <big className="block">ChainEntities Minted</big>
            {/* Minted count */}
            <h2 className="font-bold text-primary mt-3">{totalMinted}/4444</h2>

            <hr className="MintBox__Divider" />

            <big className="block">
              {mintCount} Entity costs{" "}
              <span className="text-blue">
                {(+mintCount * 0.0001).toFixed(4)}
              </span>{" "}
              Matic
            </big>
            <small className="text-divider block md:mt-2 mt-1">
              Excluding gas fees
            </small>

            {!isOnMobile && (
              <div className="flex items-center mt-6">
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
                    if (user?.attributes?.ethAddress && isWeb3Enabled) {
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
            )}

            {/* Connection warning */}
            <div className="flex items-start mt-5">
              <img
                src="/images/VectorCheckmark.svg"
                className="md:mt-1 mr-3 w-3"
                alt=""
              />

              {isOnMobile ? (
                <span className="xsmall">
                  Please visit Web version of the site, to mint an Entity
                </span>
              ) : (
                <span className="xsmall">
                  Please make sure You are connected to the{" "}
                  <span className="text-blue">Polygon Network</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
