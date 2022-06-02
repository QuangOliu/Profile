import { FaMoon, FaSun, FaBars } from 'react-icons/fa';
import { useEffect } from 'react';
export default function Header() {
  useEffect(() => {
    const main = document.querySelector('.main');
    const header = document.querySelector('.js-header');
    const click = document.querySelector('.header__mode');

    click.addEventListener('click', () => {
      main.classList.toggle('site--dark');
      header.classList.toggle('site--dark');
    });
  });

  useEffect(() => {
    const bars = document.querySelector('.js-bars');
    const nav = document.querySelector('.Nav');
    bars.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  });
  return (
    <div className='js-header'>
      <div className='header'>
        <div className='header__inner'>
          <div className='header__logo'>
            <a href='#'>
              <img
                className='onLight '
                alt=''
                src='http://edinareact.ibthemespro.com/img/logo/dark.png'
              />
              <img
                className='onDark'
                alt=''
                src='http://edinareact.ibthemespro.com/img/logo/light.png'
              />
            </a>
          </div>

          <div className='header__btn'>
            <div className='header__mode'>
              <FaMoon className='onLight header__icon' />
              <FaSun className='onDark header__icon' />
            </div>
            <div className='header__bars js-bars'>
              <FaBars />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
