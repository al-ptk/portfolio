import { useEffect, useRef, useState } from 'react';
import { getProjects } from '../data/projectsData';
import './stylesheets/ProjectCarousel.css';

const ProjectCarousel = (props) => {
  const [index, setIndex] = useState(0);
  const carousel = useRef(null);

  const getPicWidth = () => {
    return document.querySelector('.project-card img').width;
  };

  const centerCurrent = () => {
    carousel.current.style.left = `calc(25vw - ${
      (getPicWidth() + 100) * index
    }px)`;
  };

  useEffect(() => {
    centerCurrent();
  }, [index]);

  return (
    <div>
      <div className="ProjectCarousel">
        <div className="innerContainer" ref={carousel}>
          {getProjects().map((props, index) => (
            <ProjectCard key={index} {...props} />
          ))}
        </div>
      </div>
      <div className="CarouselController">
        <button className="move-left">{'<'}</button>
        {getProjects().map((props, index) => (
          <button key={index} id={`b${index}`} onClick={() => setIndex(index)}>
            {index}
          </button>
        ))}
        <button className="move-right">{'>'}</button>
      </div>
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
