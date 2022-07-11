import ProjectCarousel from './ProjectCarousel';
import './stylesheets/Projects.css';

const Projects = (props) => {
  return (
    <section id="Projects">
      <h1>Some of my projects:</h1>
      <ProjectCarousel />
    </section>
  );
};

export default Projects;
