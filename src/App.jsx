import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import ImageWithText from "./components/ImageWithText";
import Menu from "./components/Menu";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Navigation />
        <Hero />
      </div>
      <div className="wide-content">
        <div className="image-with-text">
          <ImageWithText
            image={"./src/graphics/link-hover-blue.gif"}
            title={"hej"}
            text={"hej"}
          />
        </div>
        <div className="image-with-text reverse">
          <ImageWithText
            image={"./src/graphics/drinking-coffe.gif"}
            title={"hej"}
            text={"hej"}
          />
        </div>
      </div>
      <div className="content">
        <Menu />
      </div>
      <div className="wide-content">
        <div className="image-with-text">
          <ImageWithText
            image={"./src/graphics/link-hover-blue.gif"}
            title={"hej"}
            text={"hej"}
          />
        </div>
      </div>
      <div className="content">
        <Contact />
      </div>
    </div>
  );
}

export default App;
