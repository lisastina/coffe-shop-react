import MenuItem from "./MenuItem";
import Bean from "./Bean";

const Menu = () => {
  let menuItems = [
    {
      image: "./public/graphics/house-brew.png",
      title: "House Brew",
      desc: "Our signature house brew",
      price: "32",
    },
    {
      image: "./public/graphics/latte.png",
      title: "Caffé Latte",
      desc: "Espresso with skimmed milk",
      price: "35",
    },
    {
      image: "./public/graphics/cappucino.png",
      title: "Cappucino",
      desc: "Double espresso with skimmed milk",
      price: "35",
    },
    {
      image: "./public/graphics/espresso.png",
      title: "Espresso",
      desc: "Our signature espresso blend",
      price: "28",
    },
    {
      image: "./public/graphics/americano.png",
      title: "Americano",
      desc: "Double espresso with hot water",
      price: "30",
    },
    {
      image: "./public/graphics/ice-latte.png",
      title: "Iced Latte",
      desc: "Cold latte with ice",
      price: "32",
    },
    {
      image: "./public/graphics/frappe.png",
      title: "Mocha Frappino",
      desc: "Coffee shake with whipped cream",
      price: "35",
    },
    {
      image: "./public/graphics/frappe-blueberry.png",
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
        <Bean image={"./public/graphics/bean-1.png"} />
      </div>
      <div className="bean wiggle menu__bean-2">
        <Bean image={"./public/graphics/bean-2.png"} />
      </div>
      <div className="bean wiggle menu__bean-3">
        <Bean image={"./public/graphics/bean-4.png"} />
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
        <Bean image={"./public/graphics/bean-1.png"} />
      </div>
      <div className="bean wiggle menu__bean-5">
        <Bean image={"./public/graphics/bean-2.png"} />
      </div>
      <div className="bean wiggle menu__bean-6">
        <Bean image={"./public/graphics/bean-4.png"} />
      </div>
    </div>
  );
};

export default Menu;
