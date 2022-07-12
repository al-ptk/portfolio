import { useTranslation } from 'react-i18next';
import { getContact } from '../data/contactData';
import './stylesheets/Contact.css';

const Contact = (props) => {
  const { t } = useTranslation();
  return (
    <section id="Contact">
      <h1>{t("ContactSectionTitle")}</h1>
      <ul>
        {getContact().map((props, index) => (
          <ContactChannel key={index} {...props} />
        ))}
      </ul>
    </section>
  );
};

const ContactChannel = ({ title, iconPath, iconAlt, linkPath }) => {
  return (
    <li className="contact-item">
      <a href={linkPath} target="_blank" rel="noreferrer">
        <img src={iconPath} alt={iconAlt} />
        <h2>{title}</h2>
      </a>
    </li>
  );
};

export default Contact;