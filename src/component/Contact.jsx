import { getContact } from '../data/contactData';

const Contact = (props) => {
  return (
    <section id="Contact">
      <style>
        {`
        #Contact {
          max-width: 800px;
          height: 600px;
          margin: 100px auto;
        }

        #Contact h1 {
          position: absolute;
          left: 40px;
          font-size: 64px;
          font-weight: 300;
          max-width: 15ch;
        }

        #Contact ul {
          margin: 190px auto;
          display: flex;
          flex-flow: row wrap;
          width: 90%;
          justify-content: space-between;
        }

        .contact-item {
          list-style: none;
          transition: transform .1s ease-in-out;
        }

        .contact-item:hover {
          transform: scale(1.15);
        }

        .contact-item a {
          text-decoration: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          color: black;
        }

        .contact-item img {
          width: 130px;
        }
        `}
      </style>
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
        <img src={iconPath} alt={iconAlt} />
        <h2>{title}</h2>
      </a>
    </li>
  );
};

export default Contact;
