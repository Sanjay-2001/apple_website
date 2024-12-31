import {
  Features,
  Hero,
  Highlights,
  HowItWorks,
  Model,
  Navbar,
} from "./components";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
    </main>
  );
};

export default App;
