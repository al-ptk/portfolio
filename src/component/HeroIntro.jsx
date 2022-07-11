import { useEffect } from 'react';
import bioPic from '../assets/images/github-pic.jpg';
import './stylesheets/HeroIntro.css';

const HeroIntro = (props) => {
  useEffect(() => {
    ['.hero-description p', '.hero-intro img', '.hero-intro h1'].forEach(
      (selector) => {
        document.querySelector(selector).classList.add('show')
      }
    );
  }, []);
  return (
    <div className="hero-holder">
      <section className="hero-intro">
        <img src={bioPic} alt="Alan Patrick, Web Developer" />
        <div className="hero-description">
          <h1>
            Hello there!{' '}
            <span>
              I'm{' '}
              <span style={{ color: '#756E6E', fontWeight: 600 }}>Alan</span>.
            </span>
          </h1>
          <p>
            &nbsp; I'm a Brazillian Front-End developer, working hard to bring
            forth aweomse web solutions.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HeroIntro;
