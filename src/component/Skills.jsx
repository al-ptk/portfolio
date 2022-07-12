import { getLanguages } from '../data/languageData';
import { getTechs } from '../data/technologiesData';
import { getMeths } from '../data/methodologiesData';
import Bulletlist from './BulletList';
import './stylesheets/Skills.css';
import { useTranslation } from 'react-i18next';

const Skills = (props) => {
  const { t } = useTranslation();
  return (
    <section id="Skills">
      <h1>{t('SkillsSectionTitle')}</h1>
      <Bulletlist
        title={t('Languages')}
        propsList={getLanguages()}
        animationStart={0}
      />
      <Bulletlist
        title={t('Technologies')}
        propsList={getTechs()}
        animationStart={getLanguages().length}
      />
      <Bulletlist
        title={t('Methodologies')}
        propsList={getMeths()}
        animationStart={getLanguages().length + getTechs().length}
      />
    </section>
  );
};

export default Skills;
