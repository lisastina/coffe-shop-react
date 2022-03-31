import { useState } from "react";

const Bean = ({ image }) => {
  const [imagePath, setImagePath] = useState(image);
  const [isBroken, setIsBroken] = useState(false);
  const beanImages = ["broken-bean-1", "broken-bean-2"];

  const handleClick = (e) => {
    if (isBroken) {
      /* Replace broken bean with initial bean image */
      setImagePath(image);
      e.target.closest(".bean").classList.add("wiggle");
      e.target.closest(".bean").classList.remove("broken");

      setIsBroken(false);
    } else {
      /* Randomize broken bean gif */
      const randomBean =
        beanImages[Math.floor(Math.random() * beanImages.length)];

      /* Replace bean with broken bean gif */
      setImagePath(`public/assets/${randomBean}.gif`);

      e.target.closest(".bean").classList.remove("wiggle");
      e.target.closest(".bean").classList.add("broken");
      setIsBroken(true);

      /* prevent looping of gif when clicking other beans */
      setTimeout(() => {
        setImagePath(`public/assets/${randomBean}.png`);
      }, 500);
    }
  };

  return <img onClick={handleClick} src={imagePath} alt="bean" />;
};

export default Bean;
