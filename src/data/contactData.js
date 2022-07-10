import linkedinIcon from '../assets/images/logos/linkedin-icon.png';
import githubIcon from '../assets/images/logos/github.png';
import emailIcon from '../assets/images/logos/email-icon.png';
import whatsappIcon from '../assets/images/logos/whatsapp-icon.png';

const contact = [
  {
    title: 'Linkedin',
    iconPath: linkedinIcon,
    iconAlt: 'Linkedin icon',
    linkPath: 'https://www.linkedin.com/in/alan-patrick-294180116/',
  },
  {
    title: 'Github',
    iconPath: githubIcon,
    iconAlt: 'Github icon',
    linkPath: 'https://github.com/al-ptk',
  },
  {
    title: 'E-mail',
    iconPath: emailIcon,
    iconAlt: 'E-mail icon',
    linkPath: '#',
  },
  {
    title: 'Whatsapp',
    iconPath: whatsappIcon,
    iconAlt: 'Whatsapp icon',
    linkPath: '#',
  },
];

const getContact = () => contact;

export { getContact };
