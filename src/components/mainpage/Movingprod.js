import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { FaHashtag } from 'react-icons/fa'
import { CartState } from "../../context/Context";
import './../style.css'
import { Link } from "react-router-dom";


export const Movingprod = () => {
    const {
        state: { products },
      } = CartState();
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
      <div className="Movingprod">
    <div className="header">
        <h1><i className="trend"><FaHashtag/></i>  Our Trending Products</h1>   
        <div className="more"> <Link to="/productpage">See More</Link></div>     
      </div>

      <Carousel
        swipeable={false}
        draggable={false}
        keyBoardControl={true}
        autoPlay={false}
        autoPlaySpeed={2000}
        customTransition="all ease-in-out"
        transitionDuration={300}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        responsive={responsive}>
        {products.map((value, index) => {
          return (
            <div className="first-1" key={index}>
              <img src={value.image} alt="cap" width={'300px'} height={'300px'}/>
              <h1>{value.Name}</h1>
              <p>Price</p>
              </div>
          );
        })}
        
        </Carousel>
    </div>
  );
};