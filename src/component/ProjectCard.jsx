const getRandom = () =>
  `https://picsum.photos/400/350?random=${Math.floor(Math.random() * 100)}`;

const ProjectCard = ({ title, imagePath, imageAlt, linkURL, focused }) => {
  return (
    <li onFocus={focused} className="project-card">
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

export default ProjectCard;
