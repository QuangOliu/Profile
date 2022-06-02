import { BsArrowRight } from 'react-icons/bs';
import ServiceModal from './modal';
import { useEffect, memo } from 'react';

export default memo(function Service({ data = {}, id }) {
  const { title, des, list } = data;

  return (
    <div className='service' id={id}>
      <div className='container'>
        <div className='service__wrap'>
          <h3 className='service__title'>{title}</h3>
          <p className='service__des'>{des}</p>

          <ul className='service__list'>
            {list.map((item) => {
              const { id, icon, title } = item;

              return (
                <li key={id} className='service__item'>
                  <div className='service__inner js-item'>
                    <div className='service__bg'>
                      <div>
                        <img src={icon} alt={title} />
                        <h4>{title}</h4>
                      </div>
                      <div className='service__more'>
                        Learn more
                        <span>
                          <BsArrowRight />
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <ul>
            {list.map((item) => {
              const { id, modal } = item;

              return (
                <li key={id}>
                  <ServiceModal data={modal} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
});
