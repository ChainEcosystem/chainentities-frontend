import Header from "./components/Header";
import Hero from "./components/Hero";
import Story from "./components/Story";

const App = () => {
  return (
    <main>
      {/* header */}
      <Header />

      <div className="container mx-auto">
        <Hero />
        <Story />
      </div>
    </main>
  );
};

export default App;
