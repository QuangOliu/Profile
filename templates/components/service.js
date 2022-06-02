import { BsArrowRight } from 'react-icons/bs';
import ServiceModal from './modal';
import { useEffect } from 'react';

export default function Service({ data = {} ,id}) {
  const { title, des, list } = data;

  // useEffect(() => {
  //   const items = document.querySelectorAll('.js-item');
  //   items.forEach((item) => {
  //     item.addEventListener('mousemove', (e) => {
  //       const x = e.offsetX;
  //       const width = e.toElement.clientWidth;
  //       // item.style.width = x;
  //       item.style.transform = `rotateY(${x/5}deg)`;
  //       setTimeout(function () {
  //         item.style.transform = '';
  //       }, 500);
  //     });
  //   });
  // });

  return (
    <div className='service'  id={id}>
      <div className='container'>
        <div className='service__wrap'>
          <h3 className='service__title'>{title}</h3>
          <p className='service__des'>{des}</p>

          <ul className='service__list'>
            {list.map((item) => {
              const { id, icon, title, modal } = item;

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
                  <ServiceModal data={modal} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
