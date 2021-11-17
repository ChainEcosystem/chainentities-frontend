import Header from "./components/Header";

const App = () => {
  return (
    <main>
      {/* header */}
      <Header />

      <div className="container mx-auto">
        {/* hero */}
        <div className="grid grid-cols-5">
          <div className="col-span-3">
            <div>ChainEntities make you styled</div>
            <div>Data's limited, rush for Your unique token</div>

            <div>
              The time when everyone and everything lives on blockchain is here.
            </div>

            <div>
              <button>Opensea</button>

              <button>Discord</button>
            </div>
          </div>

          <div className="col-span-2">something</div>
        </div>
      </div>
    </main>
  );
};

export default App;
