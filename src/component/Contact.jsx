import { getContact } from '../data/contactData';

const Contact = (props) => {
  return (
    <section id="contact">
      <h1>You can find me at:</h1>
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
        <h2>{title}</h2>
        <img src={iconPath} alt={iconAlt} />
      </a>
    </li>
  );
};

export default Contact;
