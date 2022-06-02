import { defaultConfig } from 'next/dist/server/config-shared';
import { useEffect } from 'react';
import { memo } from 'react';

function ServiceModal({ data = {} }) {
  const { title, img, para } = data;

  useEffect(() => {
    const items = document.querySelectorAll('.js-item');
    const modals = document.querySelectorAll('.js-modal');
    const closes = document.querySelectorAll('.js-close');
    const stops = document.querySelectorAll('.js-stop');
    const body = document.querySelector('.site');
    ///
    function showBuyTickets(id) {
      // console.log(id);
      modals[id].classList.add('active');
      body.classList.add('is-fixed')
    }

    function hidenBuy(id) {
      modals[id].classList.remove('active');
      body.classList.remove('is-fixed')
    }

    closes.forEach((item, index) =>
      item.addEventListener('click', () => {
        hidenBuy(index);
      })
    );

    modals.forEach((item, index) =>
      item.addEventListener('click', () => {
        hidenBuy(index);
      })
    );

    stops.forEach((item, index) =>
      item.addEventListener('click', (Event) => {
        Event.stopPropagation();
      })
    );

    ///

    items.forEach((item, index) => {
      item.addEventListener('click', () => {
        showBuyTickets(index);
      });
    });
  }, []);

  return (
    <div className={`modal js-modal`}>
      <div>
        <div className='modal__wrap'>
          <div className='modal__inner'>
            <div className='modal__btn js-close'>
              <img src='assets/images/cancel.svg' alt={title} />
            </div>
            <div className='modal__box js-stop'>
              <img src={img} alt={title} />
              <div className='modal__content'>
                {para.map((item) => {
                  const { title, desc } = item;
                  return (
                    <div key={item.id}>
                      <h3 className='modal__title'>{title}</h3>
                      {desc.map((des) => {
                        if (des.type == 'para') {
                          return <p key={des.id}>{des.des}</p>;
                        }

                        if (des.type == 'list') {
                          return (
                            <ul key={des.id} className='modal__list'>
                              {des.des.map((item, index) => {
                                return <li key={index}>{item}</li>;
                              })}
                            </ul>
                          );
                        }
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ServiceModal);
