import Slider from 'react-slick';
import './carousel.css';

function Carousel({ children }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    centerMode: false,
    variableWidth: true,
    adaptiveHeight: true,
    slidesToScroll: 1,
    slidesToShow: 5
  };

  return (
    <div>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}

export default Carousel;
