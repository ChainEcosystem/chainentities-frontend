import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <main>
      {/* header */}
      <Header />

      <div className="container mx-auto">
        <Hero />
      </div>
    </main>
  );
};

export default App;
