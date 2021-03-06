import ServiceModal from './modal';
import { memo } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Blog({ data = {}, id }) {
  const { title, des, list, social } = data;
  const settings = {
    dots: true,
    infinite: false,
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
          infinite: true,
          autoShow: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: false,
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className='blog' id={id}>
      <div className='container'>
        <div className='blog__wrap'>
          <div className='blog__head'>
            <h3 className='blog__title'>{title}</h3>
            <p className='blog__des'>{des}</p>
          </div>
          <div className='blog__list'>
            <ul>
              <Slider {...settings}>
                {list.map((item, index) => {
                  return (
                    <li key={item.id} className='blog__item'>
                      <div className='js-item blog__inner'>
                        <div className='blog__img'>
                          <img src={item.img} alt={item.title} />
                        </div>
                        <div className='blog__detail'>
                          <div>
                            <span>
                              {item.date}
                              <span className='blog__job'>{item.job}</span>
                            </span>
                            <h4>{item.title}</h4>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </Slider>
            </ul>
            <div className='blog__modal'>
              {list.map((item, index) => {
                return (
                  <li key={index}>
                    <ServiceModal data={item.modal} social={social} />
                  </li>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(Blog);
