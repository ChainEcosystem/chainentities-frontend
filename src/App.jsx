import Header from "./components/Header";
import Hero from "./components/Hero";
import Roadmap from "./components/Roadmap";
import Story from "./components/Story";
import Team from "./components/Team";

const App = () => {
  return (
    <main>
      {/* header */}
      <Header />

      <div className="container mx-auto">
        <Hero />
        <Story />
        <Roadmap />
        <Team />
      </div>
    </main>
  );
};

export default App;
