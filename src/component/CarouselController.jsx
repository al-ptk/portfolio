import { getProjects } from '../data/projectsData';

export const CarouselController = ({ setIndex, index }) => {
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
