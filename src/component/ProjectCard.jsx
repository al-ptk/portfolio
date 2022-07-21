import { useTranslation } from 'react-i18next';

const getRandom = () =>
  `https://picsum.photos/400/350?random=${Math.floor(Math.random() * 100)}`;

const ProjectCard = ({
  title,
  imagePath,
  imageAlt,
  linkURL,
  sourceUrl,
  focused,
}) => {
  const { t } = useTranslation();
  return (
    <li onFocus={focused} className="project-card">
      <img
        src={imagePath === '#' ? getRandom() : imagePath}
        alt={imageAlt}
        aria-hidden="true"
      />
      <h2 className="project-title">{title}</h2>
      {linkURL !== '#' && (
        <a
          className="live-link"
          href={linkURL}
          target="_blank"
          rel="noreferrer"
        >
          {t('LiveLink')}
        </a>
      )}
      <a
        className="source-link"
        href={sourceUrl}
        target="_blank"
        rel="noreferrer"
      >
        {t('SourceCode')}
      </a>
    </li>
  );
};

export default ProjectCard;
