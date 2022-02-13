import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/01-About";
import Overview from "../components/02-Overview";
import Detail from "../components/03-Details";
import Story from "../components/04-Story";
import Roadmap from "../components/05-Roadmap";
import Team from "../components/06-Team";
import FAQ from "../components/07-FAQ";

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
        <title>ChainEntities - the metaverse from your dreams</title>
        <meta
          name="description"
          content="A revolutionary metaverse game, with a unique purpose"
        />
        <link rel="icon" href="/images/icon.png" />
      </Head>

      <main className="ContentContainer">
        <div
          id="scroll-top-btn"
          style={{ display: "none" }}
          onClick={handleScrollToTop}
        >
          <Image src="/images/VectorUp.svg" height={25} width={25} alt="" />
        </div>

        {/* header */}
        <Header />
        <Hero />
        <About />

        <div className="relative">
          <div className="OverviewBg"></div>
          <Overview />
          <Detail />
        </div>

        <Story />
        <Roadmap />
        <Team />
        <FAQ />
        <Footer />
      </main>
    </>
  );
};

export default Home;
