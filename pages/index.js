import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Roadmap from "../components/Roadmap";
import Story from "../components/Story";
import Team from "../components/Team";
import About from "../components/01-About";
import Overview from "../components/02-Overview";

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
    <div>
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
        {/* header */}
        <Header />

        <div
          id="scroll-top-btn"
          style={{ display: "none" }}
          onClick={handleScrollToTop}
        >
          <Image src="/images/VectorUp.svg" height={25} width={25} alt="" />
        </div>

        <div className="container mx-auto">
          <Hero />
          <About />
          <Overview />
          <Story />
        </div>

        <Roadmap />

        <div className="container mx-auto">
          <Team />
          <FAQ />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
