import reactIcon from '../assets/images/logos/react-icon.png';
import firebaseIcon from '../assets/images/logos/firebase-icon.png';
import figmaIcon from '../assets/images/logos/figma-icon.png';
import jestIcon from '../assets/images/logos/jest-icon.jpg';

const technologies = [
  {
    title: 'React.js',
    iconPath: reactIcon,
    iconAlt: 'React.js icon',
  },
  {
    title: 'Firebase',
    iconPath: firebaseIcon,
    iconAlt: 'Firebase icon',
  },
  {
    title: 'Figma',
    iconPath: figmaIcon,
    iconAlt: 'Figma icon',
  },
  {
    title: 'Jest',
    iconPath: jestIcon,
    iconAlt: 'Jest icon',
  },
];

/**
 * Learn Tailwind
 */

const getTechs = () => technologies;

export { getTechs };
