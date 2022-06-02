import { useEffect, useState } from 'react';

export default function General({ data = {}, id }) {
  useEffect(() => {
    const length = data.typing.length;
    const textEl = document.querySelector('.home__typing');
    let text = data.typing[0];
    let idx = 1;

    writeText();

    function writeText() {
      textEl.innerText = text.slice(0, idx);
      idx++;
      if (idx > text.length) {
        idx = 0;
        const x = Math.floor(Math.random() * length);
        text = data.typing[x];
      }

      setTimeout(writeText, 200);
    }
  });

  // console.log(data)
  return (
    <div className='home' id={id}>
      {/* //id="home"   */}
      <div className='home__content'>
        <div className='home__img'>
          <img src={data.img} />
        </div>
        <div className='home__extra'>
          <h4 className='home__hello'>{data.hello}</h4>
          <div className='home__box'>
            <h1 className='home__typing'>adf</h1>
            <span className='home__blank'></span>
          </div>
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
