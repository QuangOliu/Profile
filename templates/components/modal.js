import { useEffect } from 'react';
import { memo } from 'react';

function ServiceModal({ data = {}, social = [] }) {
  const { title, img, para } = data;

  useEffect(() => {
    const items = document.querySelectorAll('.js-item');
    const modals = document.querySelectorAll('.js-modal');
    const closes = document.querySelectorAll('.js-close');
    const stops = document.querySelectorAll('.js-stop');
    const body = document.querySelector('.site');
    ///
    function showBuyTickets(id) {
      if (modals[id]) {
        modals[id].classList.add('active');
        // body.classList.add('is-fixed');
      }
    }

    function hidenBuy(id) {
      if (modals[id]) {
        modals[id].classList.remove('active');
        // body.classList.remove('is-fixed');
      }
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

    stops.forEach((item) =>
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
              <div className='modal__head'>
                <span>{data.date}</span>
                <span>{data.job}</span>
              </div>
              <div className='modal__content'>
                {para.map((item, index) => {
                  const { title, desc } = item;
                  return (
                    <div key={index}>
                      <h3 className='modal__title'>{title}</h3>
                      {desc.map((des, index) => {
                        if (des.type == 'para') {
                          return <p key={index}>{des.des}</p>;
                        }

                        if (des.type == 'list') {
                          return (
                            <ul key={index} className='modal__list'>
                              {des.des.map((item, index) => {
                                return <li key={index}>{item}</li>;
                              })}
                            </ul>
                          );
                        }

                        if (des.type == 'quote') {
                          return (
                            <div key={index} className='modal__quote'>
                              <p>{des.des}</p>
                            </div>
                          );
                        }
                      })}
                    </div>
                  );
                })}
              </div>

              {social && (
                <div className='modal__social'>
                  <span>Share:</span>
                  <ul>
                    {social.map((item) => {
                      return (
                        <li key={item.id}>
                          <a href={item.link}>
                            <img src={item.icon} alt={item.type} />
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ServiceModal);
