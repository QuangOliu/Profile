import { useEffect, useState, memo } from 'react';
import Typed from 'react-typed';
function General({ data = {}, id }) {
  const { typing } = data;
  return (
    <div className='home' id={id}>
      <div className='home__content'>
        <div className='home__img'>
          <img src={data.img} />
        </div>
        <div className='home__extra'>
          <h4 className='home__hello'>{data.hello}</h4>

          <Typed
            strings={[...typing]}
            className={'home__typing'}
            typeSpeed={100}
            backSpeed={45}
            loop
          />
          <div className='home__box'></div>
          <p className='home__pagram'>{data.about}</p>
          <ul className='home__list'>
            {data.social.map((item) => {
              return (
                <li key={item.id} className='home__social_item'>
                  <a href={item.url} title={item.type}>
                    <img src={item.src} alt={item.type} />
                  </a>
                </li>
              );
            })}
          </ul>
          <a className='btn home__btn' href={data.CV}>
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}
export default memo(General);
