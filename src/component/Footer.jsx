const Footer = (props) => {
  return (
    <footer>
      <style>
        {`
        footer {
          height: 35px;
          display: grid;
          place-items: center;
          background-color: #D9D9D9;
        }
        
        footer p {
          font-weight: 300;
          color: black;
        }

        footer p a {
          font-weight: 600;
          text-decoration: none;
          color: black;
        }

        footer p a:hover {
          background-color: black;
          color: white;
        }
        `}
      </style>
      <p>
        Made by{' '}
        <a href="https://github.com/al-ptk" target="_blank" rel="noreferrer">
          Alan Patrick
        </a>
      </p>
    </footer>
  );
};

export default Footer;
