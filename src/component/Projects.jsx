import ProjectCarousel from './ProjectCarousel';

const Projects = (props) => {
  return (
    <section id="Projects">
      <style>
        {`
        #Projects {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        #Projects h1 {
          font-size: 56px;
          font-weight: 300;
        }
        `}
      </style>
      <h1>Some of my projects:</h1>
      <ProjectCarousel />
    </section>
  );
};

export default Projects;
