import { useTranslation } from 'react-i18next';
import ProjectCarousel from './ProjectCarousel';
import './stylesheets/Projects.css';

const Projects = (props) => {
  const { t } = useTranslation();

  return (
    <section id="Projects">
      <h1>{t('ProjectsSectionTitle')}</h1>
      <ProjectCarousel />
    </section>
  );
};

export default Projects;
