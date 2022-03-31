import MenuItem from "./MenuItem";

const Menu = () => {
  let menuItems = [
    {
      image: "./src/graphics/house-brew.png",
      title: "House Brew",
      desc: "Our signature house brew",
      price: "32",
    },
    {
      image: "./src/graphics/latte.png",
      title: "Caffé Latte",
      desc: "Espresso with skimmed milk",
      price: "35",
    },
    {
      image: "./src/graphics/cappucino.png",
      title: "Cappucino",
      desc: "Double espresso with skimmed milk",
      price: "35",
    },
    {
      image: "./src/graphics/espresso.png",
      title: "Espresso",
      desc: "Our signature espresso blend",
      price: "28",
    },
    {
      image: "./src/graphics/americano.png",
      title: "Americano",
      desc: "Double espresso with hot water",
      price: "30",
    },
    {
      image: "./src/graphics/ice-latte.png",
      title: "Iced Latte",
      desc: "Cold latte with ice",
      price: "32",
    },
    {
      image: "./src/graphics/frappe.png",
      title: "Mocha Frappino",
      desc: "Coffee shake with whipped cream",
      price: "35",
    },
    {
      image: "./src/graphics/frappe-blueberry.png",
      title: "Blueberry Frappino",
      desc: "Blueberry shake with whipped cream",
      price: "35",
    },
  ];

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
          {menuItems.map((item) => {
            return (
              <MenuItem
                key={item.title}
                image={item.image}
                title={item.title}
                desc={item.desc}
                price={item.price}
              />
            );
          })}
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
