import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './Slideimg.css';

const getSlides = (imageList) => {
  return imageList.map((image) => (
    <div key={image.alt}>
      <img src={image.url} alt={image.alt} />
    </div>
  ));
};

const SlideImg = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slideimg">
      <Carousel
        className="slideimg"
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        selectedItem={currentIndex}
        onChange={handleChange}
      >
        {getSlides(images)}
      </Carousel>
    </div>
  );
};

export default SlideImg;