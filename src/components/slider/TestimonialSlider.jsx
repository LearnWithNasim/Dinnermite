import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";
import "../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 3000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review_text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
          repudiandae quod mollitia ea quos veniam, laborum sint sit cupiditate.
          Accusantium veritatis.
        </p>
        <div className="d-flex align-items-center gap-3 slider_content">
          <img src={ava01} alt="avatar" className="w-50" />
          <h6>Mitchel Marsh</h6>
        </div>
      </div>
      <div>
        <p className="review_text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
          repudiandae quod mollitia ea quos veniam, laborum sint sit cupiditate.
          Accusantium veritatis.
        </p>
        <div className="d-flex align-items-center gap-3 slider_content">
          <img src={ava02} alt="avatar" className="w-50" />
          <h6>Stiven Smith</h6>
        </div>
      </div>
      <div>
        <p className="review_text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
          repudiandae quod
        </p>
        <div className="d-flex align-items-center gap-3 slider_content">
          <img src={ava03} alt="avatar" className="w-50" />
          <h6>David Warnar</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
