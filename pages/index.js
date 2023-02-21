import { MetaDetails } from "../components/landingPage/MetaDetails";
import Newsletter from "../components/landingPage/Newsletter";
import HeaderFooterLayout from "../layout/HeaderFooterLayout";
import CoreTeam from "../components/landingPage/CoreTeam";
import Roadmap from "../components/landingPage/Roadmap";
import About from "../components/landingPage/About";
import Hero from "../components/landingPage/Hero";

import React, { useEffect } from "react";
import Image from "next/image";
import Head from "next/head";

const Home = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    function showToTopBtn() {
      const scrollTopBtn = document.getElementById("scroll-top-btn");
      if (!scrollTopBtn) return;

      if (window.pageYOffset > 400) {
        scrollTopBtn.style.display = "flex";
      } else {
        scrollTopBtn.style.display = "none";
      }
    }

    window.history.replaceState(null, "", "/");
    window.addEventListener("scroll", showToTopBtn);

    return () => window.removeEventListener("scroll", showToTopBtn);
  }, []);

  if (typeof window !== "undefined") {
    window.onbeforeunload = () => {
      handleScrollToTop();
    };
  }

  function handleScrollToTop() {
    if (typeof window === "undefined") {
      return;
    }

    window.scrollTo({
      top: 0,
    });
  }

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
        <React.Fragment />
        <div
          id="scroll-top-btn"
          style={{ display: "none" }}
          onClick={handleScrollToTop}
        >
          <Image src="/images/VectorUp.svg" height={23.5} width={18} alt="" />
        </div>
        <Hero />
        <div
          className="w-full flex flex-col"
          style={{
            background: 'url("/images/landingPage/lines.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPositionY: "200px",
          }}
        >
          <About />
          <MetaDetails />
          <Roadmap />
          <CoreTeam />
          <div className="FooterSection relative z-0 bg-transparent">
            <div className="StarBg" />
            <Newsletter />
          </div>
        </div>
        <React.Fragment />
      </HeaderFooterLayout>
    </>
  );
};

export default Home;
