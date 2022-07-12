import { useCallback, useEffect, useRef, useState } from 'react';
import { getProjects } from '../data/projectsData';
import './stylesheets/ProjectCarousel.css';

const ProjectCarousel = (props) => {
  const [index, setIndex] = useState(getProjects().length - 1);
  const carousel = useRef(null);

  const getPadLeft = (index) => {
    let result;
    const imgWidth = document.querySelector('.project-card img').width;
    const windowWidth = window.innerWidth;
    const imgBuffer = index * (imgWidth + 100);
    result = Math.floor(windowWidth / 2 - imgWidth / 2) - imgBuffer;
    return result;
  };

  const centerCurrent = useCallback((index) => {
    carousel.current.style.transform = `translateX(${getPadLeft(index)}px)`;
  }, []);

  useEffect(() => {
    window.addEventListener('resize', () => {
      const currIdx = document.querySelector('button.idxActive').textContent;
      centerCurrent(currIdx);
    });
    const threshold = document.querySelector('#Projects').offsetTop;
    const scrollBack = () => {
      if (window.scrollY >= threshold - 300) {
        setIndex(0);
        window.removeEventListener('scroll', scrollBack);
      }
    };
    window.addEventListener('scroll', scrollBack);
  }, [centerCurrent]);

  useEffect(() => {
    centerCurrent(index);
  });

  return (
    <div>
      <div className="ProjectCarousel">
        <ul className="innerContainer" ref={carousel}>
          {getProjects().map((props, index) => (
            <ProjectCard key={index} {...props} />
          ))}
        </ul>
      </div>
      <CarouselController {...{ index, setIndex }} />
    </div>
  );
};

const getRandom = () =>
  `https://picsum.photos/400/350?random=${Math.floor(Math.random() * 100)}`;

const ProjectCard = ({ title, imagePath, imageAlt, linkURL }) => {
  return (
    <li className="project-card">
      <a href={linkURL} target="_blank" rel="noreferrer">
        <img
          src={imagePath === '#' ? getRandom() : imagePath}
          alt={imageAlt}
          aria-hidden="true"
        />
        <h2>{title}</h2>
      </a>
    </li>
  );
};

const CarouselController = ({ setIndex, index }) => {
  return (
    <div className="CarouselController">
      <button
        aria-label="Move Carousel to left"
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
          aria-label={`Move Carousel to ${props.title}`}
          className={listIndex === index ? 'idxActive' : ''}
          onClick={() => setIndex(listIndex)}
        >
          {listIndex}
        </button>
      ))}
      <button
        aria-label="Move Carousel to right"
        className="move-right"
        onClick={() => {
          if (index === getProjects().length - 1) return;
          setIndex(index + 1);
        }}
      >
        {'>'}
      </button>
    </div>
  );
};

export default ProjectCarousel;
