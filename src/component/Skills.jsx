import { getLanguages } from '../data/languageData';
import { getTechs } from '../data/technologiesData';
import { getMeths } from '../data/methodologiesData';
import Bulletlist from './BulletList';
import './stylesheets/Skills.css';

const Skills = (props) => {
  return (
    <section id="Skills">
      <h1>I work with:</h1>
      <Bulletlist title="Languages" propsList={getLanguages()} animationStart={0} />
      <Bulletlist
        title="Technologies"
        propsList={getTechs()}
        animationStart={getLanguages().length}
      />
      <Bulletlist
        title="Methodologies"
        propsList={getMeths()}
        animationStart={getLanguages().length + getTechs().length}
      />
    </section>
  );
};

export default Skills;
