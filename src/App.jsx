import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import ImageWithText from "./components/ImageWithText";
import Menu from "./components/Menu";
import OpeningHours from "./components/OpeningHours";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <ImageWithText />
      <Menu />
      <ImageWithText />
      <ImageWithText />
      <Contact />
    </div>
  );
}

export default App;
