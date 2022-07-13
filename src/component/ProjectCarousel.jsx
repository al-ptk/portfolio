import { useCallback, useEffect, useRef, useState } from 'react';
import { getProjects } from '../data/projectsData';
import { CarouselController } from './CarouselController';
import { ProjectCard } from './getRandom';
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

export default ProjectCarousel;
