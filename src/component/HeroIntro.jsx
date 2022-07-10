import bioPic from '../assets/images/github-pic.jpg';

const HeroIntro = (props) => {
  return (
    <section className="hero-intro">
      <style>
        {`
        .hero-intro {
          max-width: 800px;
          margin: 100px auto;
        }

        .hero-intro h1 {
          font-weight: 600;
          font-size: 64px;
          position: relative;
          left: 50px;
        }

        .hero-intro img {
          width: 300px;
          height: 400px;
          object-fit: cover;
          box-shadow: -2px 4px 6px 0 rgba(0,0,0,.5);
          margin: 0 30px;
        }

        .hero-description {
          display: flex;
          align-items: center;
        }

        .hero-description p {
          font-size: 26px;
          font-weight: 300;
          max-width: 450px;
        }
        `}
      </style>
      <h1>
        Hello there!{' '}
        <span
          style={{
            fontWeight: 300,
            position: 'relative',
            top: '1em',
            right: 60,
          }}
        >
          I'm <span style={{ color: '#756E6E', fontWeight: 600 }}>Alan</span>.
        </span>
      </h1>
      <div className="hero-description">
        <img src={bioPic} alt="Alan Patrick, Web Developer" />
        <p>
          &nbsp; I'm a Brazillian Front-End developer, working hard to bring
          forth aweomse web solutions.
        </p>
      </div>
    </section>
  );
};

export default HeroIntro;
