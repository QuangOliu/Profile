import { memo } from 'react';
import Mainpart from './mainpart';
export default memo(function Contact({ data = {},id }) {
  const { title, des, list, form } = data;
  return (
    <div className='contact' id={id}>
      <div className='container'>
        <div className='contact__wrap'>
          <div>
            <div className='contact__head'>
              <h3 className='contact__title'>{title}</h3>
              <p className='contact__des'>{des}</p>
            </div>
            <div className='contact__info'>
              <ul className='contact__list'>
                {list.map((item, index) => {
                  let x = '';
                  if (item.type == 'phone') {
                    x = 'Tel: ';
                  }
                  if (item.type == 'email') {
                    x = 'mailto: ';
                  }
                  if (item.type == 'address') {
                    x = '';
                  }
                  return (
                    <li key={index} className='contact__item'>
                      <div className='contact__inner'>
                        <div className='contact__icon'>
                          <img src={item.icon} />
                        </div>
                        <div className='contact__contact'>
                          <h5 className='contact__type'>{item.type}</h5>
                          <ul>
                            {item.content.map((item, index) => {
                              if (x == '') {
                                return (
                                  <li key={index}>
                                    <p>{item}</p>
                                  </li>
                                );
                              }
                              return (
                                <li key={index}>
                                  <a href={`${x}${item}`}>{item}</a>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className='contact__mainpart'>
              <div className='contact__form'>
                <Mainpart data={form} />
              </div>
              <div className='contact__map'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.6936601554494!2d105.76486911531309!3d20.964813895333183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313452d90b7913a3%3A0x871599fa2f23ba57!2zMTAgUGhhbiDEkMOsbmggR2nDs3QsIGzDoG5nIExhIEtow6osIEjDoCDEkMO0bmcsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2sus!4v1653983213941!5m2!1svi!2sus'
                  allowFullScreen=''
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
