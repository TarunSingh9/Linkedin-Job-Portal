import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Review = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
  return (
    <div className="w-3/4 m-auto">
      <div className="mt-20">
      <Slider {...settings}>
        {data.map((d, index) => ( // Adding an index parameter to map function
            <div key={index} className="bg-white h-[450px] text-black rounded-xl"> {/* Adding key={index} */}
                <div className="h-76 rounded-t-xl bg-blue-500 flex justify-center items-center">
                   <img src ={d.img} alt="h-44 w-44 rounded-full"/>
                </div>

                <div className="flex flex-col justify-center items-center gap-4 p-4">
                    <p className="text-xl font-semibold">{d.name}</p>
                    <p>{d.profession}</p>
                    <p>{d.review}</p>
                    <button className="bg-blue text-white text-lg px-6 py-1 rounded-xl">Read More</button>
                </div>
            </div>
        ))}
        </Slider>
      </div>
    </div>
  );
};

const data = [
    {
      name: `John Doe`,
      profession: `Software Engineer`,
      img: `/Pictures/softwareprogrammer.jpg`,
      review: `Great experience working with this software engineer. Highly recommended!`,
    },
    {
      name: `Jane Smith`,
      profession: `Graphic Designer`,
      img: `/Pictures/graphicDesigner.jpg`,
      review: `Exceptional creativity and attention to detail. Delivered beyond expectations!`,
    },
    {
      name: `Michael Johnson`,
      profession: `Marketing Manager`,
      img: `/Pictures/marketingManager.jpg`,
      review: `Michael's marketing strategies have significantly boosted our sales. Very satisfied!`,
    },
   
  ];
  

export default Review;
