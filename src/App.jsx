import { useEffect } from "react";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Roadmap from "./components/Roadmap";
import Story from "./components/Story";
import Team from "./components/Team";

const App = () => {
  useEffect(() => {
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

  window.onbeforeunload = () => {
    handleScrollToTop();
  };

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
    });
  }

  return (
    <main className="ContentContainer">
      {/* header */}
      <Header />

      <div
        id="scroll-top-btn"
        style={{ display: "none" }}
        onClick={handleScrollToTop}
      >
        <img src="/images/VectorUp.svg" alt="" />
      </div>

      <div className="container mx-auto">
        <Hero />
        <Story />
      </div>

      <Roadmap />

      <div className="container mx-auto">
        <Team />
        <FAQ />
      </div>
      <Footer />
    </main>
  );
};

export default App;
