import Header from "./components/Header";
import Hero from "./components/Hero";
import Roadmap from "./components/Roadmap";
import Story from "./components/Story";

const App = () => {
  return (
    <main>
      {/* header */}
      <Header />

      <div className="container mx-auto">
        <Hero />
        <Story />
        <Roadmap />
      </div>
    </main>
  );
};

export default App;
