import { useCallback, useEffect, useRef, useState } from 'react';
import { getProjects } from '../data/projectsData';
import { CarouselController } from './CarouselController';
import ProjectCard from './ProjectCard';
import './stylesheets/ProjectCarousel.css';

const ProjectCarousel = (props) => {
  const [index, setIndex] = useState(getProjects().length - 1);
  const [coords, setCoords] = useState(null);
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

  const captureCoords = (e) => {
    setCoords(e.clientX || e.touches[0].clientX);
  };

  const scrollCarousel = (e) => {
    let newCoord = e.clientX || e.changedTouches[0].clientX;
    // Move carousel to the left
    if (coords - newCoord < 0 && index > 0) setIndex(index - 1);

    // Move carousel to the right
    if (coords - newCoord > 0 && index < getProjects().length - 1)
      setIndex(index + 1);
  };

  return (
    <div>
      <div
        className="ProjectCarousel"
        onMouseDown={captureCoords}
        onMouseDownCapture={(e) => e.preventDefault()}
        onMouseUp={scrollCarousel}
        onTouchStart={captureCoords}
        onTouchEnd={scrollCarousel}
      >
        <ul className="innerContainer" ref={carousel}>
          {getProjects().map((props, index) => (
            <ProjectCard
              key={index}
              {...props}
              focused={() => setIndex(index)}
            />
          ))}
        </ul>
      </div>
      <CarouselController {...{ index, setIndex }} />
    </div>
  );
};

export default ProjectCarousel;
