import { FaMoon, FaSun } from 'react-icons/fa';
import { useEffect } from 'react';
export default function Nav({ ID = [] }) {
  useEffect(() => {
    const body = document.querySelector('.body');
    const listComponent = body.childNodes;
    const listChildrenElement = document.querySelectorAll('.nav__select');

    window.addEventListener('scroll', () => {
      let current = '';
      listComponent.forEach((item, index) => {
        const itemTop = item.offsetTop;
        const itemHeight = item.clientHeight;

        if (window.pageYOffset >= itemTop - itemHeight / 3) {
          current = index + 1;
        }
      });

      listChildrenElement.forEach((liElement, index) => {
        liElement.classList.remove('active');

        if (liElement.classList.contains(`#data${current}`)) {
          liElement.classList.add('active');
        }
      });
    });

    const main = document.querySelector('.main');
    const header = document.querySelector('.js-header');
    const click = document.querySelector('.nav__mode');

    click.addEventListener('click', () => {
      main.classList.toggle('site--dark');
      header.classList.toggle('site--dark');
    });

    //

    const Nav = document.querySelector('.Nav');
    const nav = document.querySelector('.nav');
    const stop = document.querySelector('.js-nav-stop');
    Nav.addEventListener('click', () => {
      Nav.classList.toggle('active');
    });
    stop.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  });

  return (
    <div className='nav js-nav-stop'>
      <div className='nav__head'>
        <a href='./'>
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
        <div className='nav__mode'>
          <FaMoon className='onLight nav__icon' />
          <FaSun className='onDark nav__icon' />
        </div>
      </div>
      <div className='nav__body'>
        <ul>
          <li>
            <a href={`#${ID[0]}`} className={`nav__select #${ID[0]}`}>
              {' '}
              <img src='http://edinareact.ibthemespro.com/img/svg/home.svg' />{' '}
              Home
            </a>
          </li>
          <li>
            <a href={`#${ID[1]}`} className={`nav__select #${ID[1]}`}>
              {' '}
              <img src='http://edinareact.ibthemespro.com/img/svg/human.svg' />{' '}
              About
            </a>
          </li>
          <li>
            <a href={`#${ID[2]}`} className={`nav__select #${ID[2]}`}>
              {' '}
              <img src='http://edinareact.ibthemespro.com/img/svg/service.svg' />{' '}
              Service
            </a>
          </li>
          <li>
            <a href={`#${ID[3]}`} className={`nav__select #${ID[3]}`}>
              {' '}
              <img src='http://edinareact.ibthemespro.com/img/svg/portfolio.svg' />{' '}
              Portfolio
            </a>
          </li>
          <li>
            <a href={`#${ID[4]}`} className={`nav__select #${ID[4]}`}>
              {' '}
              <img src='http://edinareact.ibthemespro.com/img/svg/testimonial.svg' />{' '}
              Testimonial
            </a>
          </li>
          <li>
            <a href={`#${ID[5]}`} className={`nav__select #${ID[5]}`}>
              {' '}
              <img src='http://edinareact.ibthemespro.com/img/svg/blog.svg' />{' '}
              Blog
            </a>
          </li>
          <li>
            <a href={`#${ID[6]}`} className={`nav__select #${ID[6]}`}>
              {' '}
              <img src='http://edinareact.ibthemespro.com/img/svg/contact.svg' />{' '}
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className='nav__footer'>
        <div className='nav__inner'>
          <div className='nav__image'>
            <div className='nav__imageMain'>
              <img src='/assets/images/anh1.jpg' />
            </div>
          </div>
          <div className='nav__short'>
            <h3 className='nav__name'>Quang Oiliu</h3>
            <a
              href='mailto:ib-trantran30102002@gmail.com'
              style={{ cursor: 'none' }}
            >
              trantran30102002@
              <br />
              gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
