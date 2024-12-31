import { Features, Hero, Highlights, Model, Navbar } from "./components";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
    </main>
  );
};

export default App;
