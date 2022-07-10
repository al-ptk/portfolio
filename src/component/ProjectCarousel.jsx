import { useEffect } from 'react';
import { getProjects } from '../data/projectsData';

const ProjectCarousel = (props) => {


  return (
    <div className="ProjectCarousel">
      <style>
        {`
        .ProjectCarousel {
          width: 100%;
          height: 580px;

          display: flex;
          padding: 100px 60px;
          gap: 100px;
          overflow-x: scroll;

          background-color: #dedede;
          box-shadow: inset 0px 4px 8px rgba(0, 0, 0, 0.25), inset 0px -4px 8px rgba(0, 0, 0, 0.25);
        }

        .project-card a {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: black;
          text-shadow: 0px 4px 3px rgba(0,0,0,.3);
        }

        .project-card img {
          flex: 0 0 auto;
          background-color: pink;
          display: inline-block;
          width: 400px;
          height: 350px;
          box-shadow: 0 4px 4px 0 rgba(0,0,0,.1)
        }
        `}
      </style>
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
