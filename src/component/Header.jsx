import './stylesheets/Header.css';
import brazilFlag from '../assets/images/flags/brazil_round_icon_64.png';
import UKflag from '../assets/images/flags/united_kingdom_round_icon_64.png';
import { useTranslation } from 'react-i18next';

const Header = (props) => {
  const { t } = useTranslation();
  const { setCurrLng } = props;
  return (
    <header>
      <div className="header-bar">
        <button
          className="burger-button"
          onClick={() => {
            document.querySelector('.header-bar').classList.toggle('show');
          }}
        >
          <svg
            viewBox="0 0 100 65"
            width="30"
            height="30"
            fill="rgba(0, 0, 0,.5)"
          >
            <rect width="100" height="15"></rect>
            <rect y="30" width="100" height="15"></rect>
            <rect y="60" width="100" height="15"></rect>
          </svg>
        </button>
        <div>
          <button
            aria-label="Mudar para Português"
            onClick={() => setCurrLng('pt')}
          >
            <img src={brazilFlag} alt="PT" />
          </button>
          <button
            aria-label="Switch to English"
            onClick={() => setCurrLng('en')}
          >
            <img src={UKflag} alt="EN" />
          </button>
        </div>
        <nav>
          <li>
            <a href="#Skills">{t('Skills')}</a>
          </li>
          <li>
            <a href="#Projects">{t('Projects')}</a>
          </li>
          <li>
            <a href="#Contact">{t('Contact')}</a>
          </li>
        </nav>
      </div>
      <div className="image-holder">
        <div className="banner-image" />
      </div>
      {/* Add credit to picture */}
    </header>
  );
};

export default Header;
