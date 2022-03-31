const MenuItem = ({ title, image, desc, price }) => {
  return (
    <div className="menu-item">
      <div className="menu-item__image-and-desc">
        <div className="menu-item__image">
          <img src={image} alt={title} />
        </div>

        <div className="menu-item__text">
          <h3 className="menu-item__title">{title}</h3>

          <p className="menu-item__desc">{desc}</p>
        </div>
      </div>
      <p className="menu-item__price">{price} kr</p>
    </div>
  );
};

export default MenuItem;
