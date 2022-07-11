import { getLanguages } from '../data/languageData';
import { getTechs } from '../data/technologiesData';
import { getMeths } from '../data/methodologiesData';
import { useEffect, useRef } from 'react';

const Skills = (props) => {
  return (
    <section id="Skills">
      <style>
        {`
        #Skills {
          position: relative;
          max-width: 800px;
          height: 50vh;
          display: flex;
          flex-flow: row wrap;
          justify-content: space-between;
        }

        #Skills h1 {
          width: 100%;
          margin-bottom: 30px;
          font-size: 56px;
          font-weight: 300;
          text-align: center;
        }

        #Skills section {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        #Skills section h2 {
          font-weight: 600;
        }

        .bullet-item {
          position: relative;
          list-style: none;
          display: flex;
          align-items: center;
          gap: 10px;
          max-width: 250px;
          opacity: 0;
          transition: opacity .6s ease-in-out;
        }

        .bullet-item h3 {
          font-weight: 400;
        }

        .bullet-image {
          width: 70px;
          aspect-ration: 1/1;
          border-radius: 50%;
        }
        `}
      </style>
      <h1>I work with:</h1>
      <section className="languages">
        <h2>Languages:</h2>
        {getLanguages().map((props, index) => (
          <BulletItem key={index} {...props} animationStart={index} />
        ))}
      </section>
      <section className="technologies">
        <h2>Technologies:</h2>
        {getTechs().map((props, index) => (
          <BulletItem
            key={index}
            {...props}
            animationStart={index + getLanguages().length}
          />
        ))}
      </section>
      <section className="methodologies">
        <h2>Methodologies</h2>
        {getMeths().map((props, index) => (
          <BulletItem
            key={index}
            {...props}
            animationStart={index + getLanguages().length + getTechs().length}
          />
        ))}
      </section>
    </section>
  );
};

const setOffAnimation = (bullet, animationStart) => {
  setTimeout(() => {
    bullet.current.style.opacity = 1;
  }, 500 + animationStart * 600);
};

const BulletItem = ({ iconPath, iconAlt, title, animationStart }) => {
  const bullet = useRef(null);

  useEffect(() => {
    setOffAnimation(bullet, animationStart);
  }, [animationStart]);

  return (
    <li className="bullet-item" ref={bullet}>
      <img src={iconPath} alt={iconAlt} className="bullet-image" />
      <h3 className="bullet-title">{title}</h3>
    </li>
  );
};

export default Skills;
