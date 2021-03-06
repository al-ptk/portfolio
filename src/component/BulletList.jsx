import { useCallback, useEffect, useRef } from 'react';

const Bulletlist = ({ title, propsList, animationStart }) => {
  return (
    <section className="bullet-list">
      <h2>{title}:</h2>
      {/* It generates a lit of bullets. */}
      {propsList.map((props, index) => (
        <BulletItem
          key={index}
          {...props}
          // this creates the opacity transition trigger
          animationStart={index + animationStart}
        />
      ))}
    </section>
  );
};

const BulletItem = ({ iconPath, iconAlt, title, animationStart }) => {
  const self = useRef(null);

  const setAnimationOff = useCallback(() => {
    let skills = document.querySelector('#Skills');
    if (window.scrollY >= skills.offsetTop - 500) {
      // Gets timing for each instance to transition
      const customTiming = animationStart * 600;

      // Sets off the opacity transition
      setTimeout(() => {
        self.current.style.opacity = 1;
      }, customTiming);

      window.removeEventListener('scroll', setAnimationOff);
    }
  }, [animationStart]);

  useEffect(() => {
    window.addEventListener('scroll', setAnimationOff);
  }, [setAnimationOff]);

  return (
    <li className="bullet-item" ref={self}>
      <img
        src={iconPath}
        alt={iconAlt}
        className="bullet-image"
        aria-hidden="true"
      />
      <h3 className="bullet-title">{title}</h3>
    </li>
  );
};

export default Bulletlist;
