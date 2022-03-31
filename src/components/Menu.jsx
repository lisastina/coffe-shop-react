import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div className="menu">
      <span id="menu"></span>

      {/* Beans */}
      <div className="bean wiggle menu__bean-1">
        <img id="bean-1" src="" alt="coffe bean" />
      </div>
      <div className="bean wiggle menu__bean-2">
        <img id="bean-2" src="" alt="coffe bean" />
      </div>
      <div className="bean wiggle menu__bean-3">
        <img id="bean-4" src="" alt="coffe bean" />
      </div>
      <div className="menu__image">
        <img id="bean-4" src="" alt="coffe bean" />
      </div>

      <div className="menu__border">
        <h2 className="menu__title">Coffee menu</h2>

        <div className="menu__items">
          <MenuItem image={""} title={"coffee"} desc={"hellooo"} price={"34"} />
        </div>
      </div>

      {/* Beans */}
      <div className="bean wiggle menu__bean-4">
        <img id="bean-1" src="" alt="coffe bean" />
      </div>
      <div className="bean wiggle menu__bean-5">
        <img id="bean-2" src="" alt="coffe bean" />
      </div>
      <div className="bean wiggle menu__bean-6">
        <img id="bean-4" src="" alt="coffe bean" />
      </div>
    </div>
  );
};

export default Menu;
