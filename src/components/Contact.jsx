const Contact = () => {
  return (
    <div className="content">
      <div className="contact">
        <span id="contact"></span>

        {/* Beans */}
        <div className="bean wiggle contact__bean-1">
          <img id="bean-1" src="" alt="coffe bean" />
        </div>
        <div className="bean wiggle contact__bean-2">
          <img id="bean-2" src="" alt="coffe bean" />
        </div>
        <div className="bean wiggle contact__bean-3">
          <img id="bean-4" src="" alt="coffe bean" />
        </div>

        <div className="map">
          <h2 className="contact__title">Visit us</h2>

          <div className="map__image">
            <img src="./src/graphics/map.png" alt="map" />
          </div>
        </div>
        <div>
          <h2 className="contact__title">Please keep in touch!</h2>

          <div className="contact-info">
            <a href="mailto:lisastina.hansson@gmail.com">
              lisastina.hansson@gmail.com
            </a>

            <a href="tel:lisastina.hansson@gmail.com">070-123 45 67</a>

            <ul className="address">
              <li>Lilla varvsgatan 8</li>
              <li>211 17 Malmö</li>
            </ul>

            <div className="contact-info__image">
              <img src="./src/graphics/coffe-grinder.gif" alt="coffe grinder" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
