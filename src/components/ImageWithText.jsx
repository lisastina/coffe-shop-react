const ImageWithText = ({ image, title, text }) => {
  return (
    <>
      <div className="image-with-text__image">
        <img src={image} alt={title} />
      </div>
      <div className="image-with-text__text">
        <h2 className="image-with-text__title">{title}</h2>

        <p className="image-with-text__body">{text}</p>
      </div>
    </>
  );
};

export default ImageWithText;
