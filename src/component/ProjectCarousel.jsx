import { getProjects } from '../data/projectsData';
import './stylesheets/ProjectCarousel.css';

const ProjectCarousel = (props) => {
  return (
    <div className="ProjectCarousel">
      {getProjects().map((props, index) => (
        <ProjectCard key={index} {...props} />
      ))}
    </div>
  );
};

const getRandom = () =>
  `https://picsum.photos/400/350?random=${Math.floor(Math.random() * 100)}`;

const ProjectCard = ({ title, imagePath, imageAlt, linkURL }) => {
  return (
    <section className="project-card">
      <a href={linkURL} target="_blank" rel="noreferrer">
        <img src={imagePath === '#' ? getRandom() : imagePath} alt={imageAlt} />
        <h2>{title}</h2>
      </a>
    </section>
  );
};

export default ProjectCarousel;
