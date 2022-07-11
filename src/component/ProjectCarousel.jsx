import { useEffect, useRef, useState } from 'react';
import { getProjects } from '../data/projectsData';
import './stylesheets/ProjectCarousel.css';

const ProjectCarousel = (props) => {
  const [index, setIndex] = useState(1);
  const carousel = useRef(null);

  const getPadLeft = (index) => {
    let result;
    const imgWidth = document.querySelector('.project-card img').width;
    const windowWidth = window.innerWidth;
    const imgBuffer = index * (imgWidth + 100);
    result = Math.floor(windowWidth / 2 - imgWidth / 2) - imgBuffer;
    return result;
  };

  const centerCurrent = (index) => {
    carousel.current.style.transform = `translateX(${getPadLeft(index)}px)`;
  };

  useEffect(() => {
    window.addEventListener('resize', () => {
      const currIdx = document.querySelector('button.idxActive').textContent;
      centerCurrent(currIdx);
    });
  }, []);

  useEffect(() => {
    centerCurrent(index);
  });

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
        <button
          className="move-left"
          onClick={() => {
            if (!index) return;
            setIndex(index - 1);
          }}
        >
          {'<'}
        </button>
        {getProjects().map((props, listIndex) => (
          <button
            key={listIndex}
            className={listIndex === index ? 'idxActive' : ''}
            onClick={() => setIndex(listIndex)}
          >
            {listIndex}
          </button>
        ))}
        <button
          className="move-right"
          onClick={() => {
            if (index === getProjects().length - 1) return;
            setIndex(index + 1);
          }}
        >
          {'>'}
        </button>
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
