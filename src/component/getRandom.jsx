const getRandom = () =>
  `https://picsum.photos/400/350?random=${Math.floor(Math.random() * 100)}`;
export const ProjectCard = ({ title, imagePath, imageAlt, linkURL }) => {
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
