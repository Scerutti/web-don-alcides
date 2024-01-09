import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const ProductCarousel = ({ productsFeat }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerPadding: "0",
    centerMode: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          centerMode: true,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <div className="product-carousel-container pt-50">
      <div className="container-producto-carrusel">
        <Slider {...settings}>
          {productsFeat?.map((item) => (
            <div
              className="carousel-producto"
              key={item._id}
              style={{ cursor: "pointer" }}
            >
              <div className="product-card">
                <div className="product-top">
                  <img src={item.image} alt={item.name} />
                </div>
                <Link key={item._id} href={`/tienda`} passHref>
                  <div className="product-bottom">
                    <h6 className="product-name">{item.name}</h6>
                    <h5 className="product-price pt-20">$ {item.price}</h5>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductCarousel;
