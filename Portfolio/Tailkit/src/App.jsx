import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import PageHead from "./components/PageHead";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <PageHead />
      <Features />
    </div>
  );
};

export default App;
