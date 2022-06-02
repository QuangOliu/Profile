export default function About({ data = {}, id }) {
  const { info, skill, img } = data;
  return (
    <div className='about' id={id}>
      <div>
        <div className='container'>
          <h2 className='about__title'>{data.title}</h2>
          <div className='about__content'>
            <div className='about__left'>
              <div className='about__info '>
                <h3>
                  Hi, I'm <strong>{info.name} </strong>
                </h3>
                <p>{info.position}</p>
              </div>
              <div className='about__skill'>
                <h3>{skill.title}</h3>
                <p>{skill.desc}</p>
              </div>
              <div className='about__list'>
                <ul>
                  {skill.list.map((item) => {
                    return (
                      <li key={item.id}>
                        <div className='about__inner'>
                          <span className='about__label'>{item.name}</span>
                          <div className='about__full'>
                            <div
                              className='about__bar'
                              style={{ width: `${item.percent}%` }}
                            ></div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <div className='about__btn'>
                  <a className='btn btn--hard'>See more</a>
                </div>
              </div>
            </div>

            <div className='about__img'>
              <div className='about__imgPo'>
                <img alt={data.title} src={img} />
                <div className='about__exp'>
                  <div className='about__exp-info'>
                    <h3>{info.experiance}</h3>
                    <span>Of Experiance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
