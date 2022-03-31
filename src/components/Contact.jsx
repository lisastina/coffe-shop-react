import Bean from "./Bean";

const Contact = () => {
  return (
    <div className="content">
      <div className="contact">
        <span id="contact"></span>

        {/* Beans */}
        <div className="bean wiggle contact__bean-1">
          <Bean image={"/assets/bean-1.png"} />
        </div>
        <div className="bean wiggle contact__bean-2">
          <Bean image={"/assets/bean-2.png"} />
        </div>
        <div className="bean wiggle contact__bean-3">
          <Bean image={"/assets/bean-4.png"} />
        </div>

        <div className="map">
          <h2 className="contact__title">Visit us</h2>

          <div className="map__image">
            <img src="/assets/map.png" alt="map" />
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
              <li>Sweden</li>
            </ul>

            <div className="contact-info__image">
              <img src="/assets/coffe-grinder.gif" alt="coffe grinder" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
