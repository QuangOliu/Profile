import React from 'react';
// import { useEffect } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Testimonials({ data = {}, id }) {
  const { title, des, list } = data;
  const settings = {
    dots: true,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className='test' id={id}>
      <div className='container'>
        <div className='test__wrap'>
          <div className='test__content'>
            <h2 className='test__title'>{title}</h2>
            <p className='test__des'>{des}</p>
          </div>

          <div className='test__list'>
            <ul>
              <Slider {...settings}>
                {list.map((item) => {
                  return (
                    <li key={item.id}>
                      <div className='test__list-inner'>
                        <div className='test__info'>
                          <div className='test__impo'>
                            <img src={item.img} alt={item.name} />
                            <div>
                              <h4 className='test__name'>{item.name}</h4>
                              <p className='test__special'>
                                {item.speciallization}
                              </p>
                            </div>
                          </div>
                          <div>
                            <img
                              className='test__quote'
                              src='/assets/images/quote.svg'
                              alt='quote'
                            />
                          </div>
                        </div>
                        <p className='test__para'>{item.para}</p>
                      </div>
                    </li>
                  );
                })}
              </Slider>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
