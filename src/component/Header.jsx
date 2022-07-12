import './stylesheets/Header.css';
import brazilFlag from '../assets/images/flags/brazil_round_icon_64.png';
import UKflag from '../assets/images/flags/united_kingdom_round_icon_64.png';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';

const changeLanguage = (lng) => {
  return () => i18n.changeLanguage(`${lng}`);
};

const Header = (props) => {
  const { t } = useTranslation();
  return (
    <header>
      <div className="header-bar">
        <div>
          <button
            aria-label="Mudar para Português"
            onClick={changeLanguage('pt')}
          >
            <img src={brazilFlag} alt="PT" />
          </button>
          <button aria-label="Switch to English" onClick={changeLanguage('en')}>
            <img src={UKflag} alt="EN" />
          </button>
        </div>
        <nav>
          <li>
            <a style={{ maxWidth: '80%' }} href="#Skills">
              {t('Skills')}
            </a>
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
