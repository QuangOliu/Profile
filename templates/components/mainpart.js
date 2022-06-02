export default function Mainpart({ data = {} }) {
  const { para, strong, input } = data;
  return (
    <div className='mainpart'>
      <div className='mainpart__inner'>
        <div className='mainpart__wrap'>
          <div className='mainpart__head'>
            <p className='mainpart__title'>
              {para}
              <strong>{strong}</strong>
            </p>
          </div>

          <form className='mainpart__field'>
            {input.map((item, index) => {
              if (item.child === 'input') {
                return (
                  <div key={index}>
                    <input
                      name={item.name}
                      type={item.type}
                      placeholder={item.placeholder}
                      required
                    />
                  </div>
                );
              }
              if (item.child === 'textarea') {
                return (
                  <div key={index}>
                    <textarea
                      name={item.name}
                      type={item.type}
                      placeholder={item.placeholder}
                      required
                    />
                  </div>
                );
              }
              if (item.child === 'button') {
                return (
                  <button
                    key={index}
                    name={item.name}
                    type={item.type}
                    placeholder={item.placeholder}
                    required
                  >
                    {item.placeholder}
                  </button>
                );
              }
            })}
          </form>
        </div>
      </div>
    </div>
  );
}
