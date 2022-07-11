import bioPic from '../assets/images/github-pic.jpg';

const HeroIntro = (props) => {
  return (
    <section className="hero-intro">
      <style>
        {`
        .hero-intro {
          border: 1px solid red;
          height: 50vh;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          font-size: 10px;
        }

        .hero-intro h1 {
          font-weight: 600;
          font-size: 6.4em;
          max-width: 15ch;
        }

        .hero-intro img {
          height: 100%;
          aspect-ratio: 3 / 4;
          object-fit: cover;
          box-shadow: -2px 4px 6px 0 rgba(0,0,0,.5);
          margin: 0 30px;
        }

        .hero-description {
          max-width: 30%;
          display: flex;
          flex-direction: column;
          padding: 50px 0;
          gap: 35px;
        }

        .hero-description p {
          font-size: 2.6em;
          font-weight: 300;
          max-width: 450px;
        }

        @media (max-width: 1000px) {
          .hero-intro {
            max-width: 100%;
            font-size: 8px;
          }
        }

        @media (max-width: 500px) {
          .hero-intro {
            font-size: 8px;
          }
        }
        `}
      </style>
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
