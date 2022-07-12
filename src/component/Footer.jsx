import { useTranslation } from 'react-i18next';
import './stylesheets/Footer.css';

const Footer = (props) => {
  const { t } = useTranslation();
  return (
    <footer>
      <p>
        {t('FooterText')}{' '}
        <a href="https://github.com/al-ptk" target="_blank" rel="noreferrer">
          Alan Patrick
        </a>
      </p>
    </footer>
  );
};

export default Footer;
