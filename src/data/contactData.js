import linkedinIcon from '../assets/images/logos/linkedin-icon.png';
import githubIcon from '../assets/images/logos/github.png';
import emailIcon from '../assets/images/logos/email-icon.png';
import whatsappIcon from '../assets/images/logos/whatsapp-icon.png';

/*
 * Add Dev.to and Twiter
 */

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
    linkPath: 'https://github.com/al-ptk/',
  },
  {
    title: 'E-mail',
    iconPath: emailIcon,
    iconAlt: 'E-mail icon',
    linkPath: 'alan.patrick.fv@gmail.com',
  },
  {
    title: 'Whatsapp',
    iconPath: whatsappIcon,
    iconAlt: 'Whatsapp icon',
    linkPath: 'https://wa.me/5521980016371',
  },
];

const getContact = () => contact;

export { getContact };
