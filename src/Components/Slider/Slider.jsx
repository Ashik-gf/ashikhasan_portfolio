import React from "react";
import Slider from "react-slick";
import image1 from '../../assets/hotelmanagement.png';
import image2 from '../../assets/course.png';
import image3 from '../../assets/getjobbd.png';
import image4 from '../../assets/sports.png';
import image5 from '../../assets/task.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
        <img className=" h-[280px] w-[300px] mx-auto" src={image1} />
      </div>
      <div>
        <img className=" h-[280px] w-[300px] mx-auto" src={image2} />
      </div>
      <div>
        <img className=" h-[280px] w-[300px] mx-auto" src={image3} />
      </div>
      <div>
        <img className=" h-[280px] w-[300px] mx-auto" src={image4} />
      </div>
      <div>
        <img className=" h-[280px] w-[300px] mx-auto" src={image5} />
      </div>
     
     
    </Slider>
  );
}