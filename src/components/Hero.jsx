import OpeningHours from "./OpeningHours";
import Bean from "./Bean";

const Hero = () => {
  return (
    <div className="content">
      <div className="hero">
        {/*  Beans */}
        <div className="bean wiggle hero__bean-1">
          <Bean image={"/assets/bean-1.png"} />
        </div>
        <div className="bean wiggle hero__bean-2">
          <Bean image={"/assets/bean-2.png"} />
        </div>
        <div className="bean wiggle hero__bean-3">
          <Bean image={"/assets/bean-2.png"} />
        </div>
        <div className="bean wiggle hero__bean-4">
          <Bean image={"/assets/bean-3.png"} />
        </div>
        <div className="bean wiggle hero__bean-5">
          <Bean image={"/assets/bean-4.png"} />
        </div>

        <h2 className="hero__subtitle">Welcome to</h2>

        <h1 className="hero__title">Lisa's Coffee Shop</h1>

        <div className="hero__image">
          <img src="/assets/coffe-shop.gif" alt="coffe-cheers" />
        </div>

        <h2 className="hero__subtitle">We serve coffee!</h2>
      </div>

      <OpeningHours />
    </div>
  );
};

export default Hero;
