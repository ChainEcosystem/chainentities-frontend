import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/landingPage/Hero";
import About from "../components/landingPage/About";
import Overview from "../components/02-Overview";
import Detail from "../components/03-Details";
import Story from "../components/04-Story";
import Team from "../components/06-Team";
import FAQ from "../components/07-FAQ";

import { MetaDetails } from "../components/landingPage/MetaDetails";
import CoreTeam from "../components/landingPage/CoreTeam";
import Roadmap from "../components/landingPage/Roadmap";

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

      <main className="ContentContainer">
        <div
          id="scroll-top-btn"
          style={{ display: "none" }}
          onClick={handleScrollToTop}
        >
          <Image src="/images/VectorUp.svg" height={23.5} width={18} alt="" />
        </div>

        {/* header */}
        <Header />
        <Hero />
        <About />
        <MetaDetails />
        <Roadmap />
        <CoreTeam />
        <Footer />
      </main>
    </>
  );
};

export default Home;
