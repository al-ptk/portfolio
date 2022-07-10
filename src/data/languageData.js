import htmlIcon from '../assets/images/logos/html5-512.png';
import cssIcon from '../assets/images/logos/css-icon.png';
import jsIcon from '../assets/images/logos/javascript-icon.png';

const languages = [
  {
    title: 'HTML',
    iconPath: htmlIcon,
    iconAlt: 'HTML icon',
  },
  {
    title: 'CSS',
    iconPath: cssIcon,
    iconAlt: 'CSS icon',
  },
  {
    title: 'Javascript',
    iconPath: jsIcon,
    iconAlt: 'Javascript icon',
  },
];

const getLanguages = () => languages;

export { getLanguages };
