import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Portfolio({ data = {}, id }) {
  const { ports } = data;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className='port' id={id}>
      <div className='container'>
        <div className='port__wrap'>
          <div className='port__content'>
            <h2 className='port__title'>{data.title}</h2>
            <p className='port__des'>{data.des}</p>
          </div>

          <Slider {...settings}>
            {ports.map((item, index) => {
              return (
                <li key={index} className='port__item'>
                  <a href={item.link}>
                    <img src={item.img} />
                  </a>
                </li>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
