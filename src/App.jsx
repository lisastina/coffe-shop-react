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
        <span id="about"></span>
        <div className="image-with-text">
          <ImageWithText
            image={"public/assets/coffe-shop.png"}
            title={"Take a zip"}
            text={
              "Lisa's coffee shop opened in Malmö in 2020 and since then many local coffee lovers have visited and helped us develop our coffee shop to what it is today. We are open every day, please to stop by and taste our famous house brew!"
            }
          />
        </div>
        <div className="image-with-text reverse">
          <ImageWithText
            image={"public/assets/drinking-coffe.gif"}
            title={"A cozy fika"}
            text={
              "Even if you come here with friends to have a social fika or to relax with a book, we offer a perfect place to unwind and several delicious cups of coffee to drink. We love meeting and serving our customers so feel free to ask if you have any special requests."
            }
          />
        </div>
      </div>
      <div className="content">
        <Menu />
      </div>
      <div className="wide-content">
        <div className="image-with-text">
          <ImageWithText
            image={"public/assets/brewing.gif"}
            title={"Locally roasted"}
            text={
              "We work closely with our farmers to ensure ethically produced coffee beans as well as fairly treated workers and nature. The beans are then locally roasted with at our own roastery. Brewed with care to create our beloved house brew."
            }
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
