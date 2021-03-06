import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import bioPic from '../assets/images/github-pic.jpg';
import './stylesheets/HeroIntro.css';

const HeroIntro = (props) => {
  const { t } = useTranslation();
  const ref = useRef(null);

  useEffect(() => {
    ref.current.onload = () => {
      ['.hero-description p', '.hero-intro img', '.hero-intro h1'].forEach(
        (selector) => {
          document.querySelector(selector).classList.add('show');
        }
      );
    };
  }, [ref]);
  return (
    <div className="hero-holder">
      <section className="hero-intro">
        <img ref={ref} src={bioPic} alt={t('MainPicAlt')} />
        <div className="hero-description">
          <h1>
            {t('greetingTop')}{' '}
            <div>
              {t('greetingBottom')}{' '}
              <span style={{ color: '#756E6E', fontWeight: 600 }}>Alan</span>.
            </div>
          </h1>
          <p>&nbsp;{t('bioDescription')}</p>
        </div>
      </section>
    </div>
  );
};

export default HeroIntro;
