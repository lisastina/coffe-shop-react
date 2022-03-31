import OpeningHours from "./OpeningHours";

const Hero = () => {
  return (
    <div className="content">
      <div className="hero">
        {/*  Beans */}
        {/* <div className="bean wiggle hero__bean-1">
        <img id="bean-1" src="{{ bean_1_path }}" alt="coffe bean">
      </div>
      <div className="bean wiggle hero__bean-2">
        <img id="bean-2" src="{{ bean_2_path }}" alt="coffe bean">
      </div>
      <div className="bean wiggle hero__bean-3">
        <img id="bean-2" src="{{ bean_2_path }}" alt="coffe bean">
      </div>
      <div className="bean wiggle hero__bean-4">
        <img id="bean-3" src="{{ bean_3_path }}" alt="coffe bean">
      </div>
      <div className="bean wiggle hero__bean-5">
        <img id="bean-4" src="{{ bean_4_path }}" alt="coffe bean">
      </div> */}

        <h2 className="hero__subtitle">Welcome to</h2>

        <h1 className="hero__title">Lisa's Coffee Shop</h1>

        <div className="hero__image">
          <img src="./src/graphics/coffe-shop.gif" alt="coffe-cheers" />
        </div>

        <h2 className="hero__subtitle">We serve coffee!</h2>
      </div>

      <OpeningHours />
    </div>
  );
};

export default Hero;
