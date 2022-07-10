import { getLanguages } from '../data/languageData';
import { getTechs } from '../data/technologiesData';
import { getMeths } from '../data/methodologiesData';

const Skills = (props) => {
  return (
    <section id="Skills">
      <style>
        {`
        #Skills {
          position: relative;
          max-width: 800px;
          margin: 200px auto;
          display: flex;
          flex-flow: row wrap;
          justify-content: space-between;
        }

        #Skills h1 {
          position: absolute;
          font-size: 56px;
          font-weight: 300;
          top: -1.7em;
          left: 33px;
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
          list-style: none;
          display: flex;
          align-items: center;
          gap: 10px;
          max-width: 250px;
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
          <BulletItem key={index} {...props} />
        ))}
      </section>
      <section className="technologies">
        <h2>Technologies:</h2>
        {getTechs().map((props, index) => (
          <BulletItem key={index} {...props} />
        ))}
      </section>
      <section className="methodologies">
        <h2>Methodologies</h2>
        {getMeths().map((props, index) => (
          <BulletItem key={index} {...props} />
        ))}
      </section>
    </section>
  );
};

const BulletItem = ({ iconPath, iconAlt, title }) => {
  return (
    <li className="bullet-item">
      <img src={iconPath} alt={iconAlt} className="bullet-image" />
      <h3 className="bullet-title">{title}</h3>
    </li>
  );
};

export default Skills;
