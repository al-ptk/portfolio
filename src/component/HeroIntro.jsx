import bioPic from '../assets/images/github-pic.jpg';
import './stylesheets/HeroIntro.css';

const HeroIntro = (props) => {
  return (
    <section className="hero-intro">
      <img src={bioPic} alt="Alan Patrick, Web Developer" />
      <div className="hero-description">
        <h1>
          Hello there!{' '}
          <span>
            I'm <span style={{ color: '#756E6E', fontWeight: 600 }}>Alan</span>.
          </span>
        </h1>
        <p>
          &nbsp; I'm a Brazillian Front-End developer, working hard to bring
          forth aweomse web solutions.
        </p>
      </div>
    </section>
  );
};

export default HeroIntro;
