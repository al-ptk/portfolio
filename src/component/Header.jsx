import bannerImage from '../assets/images/grey-landscape.jpg';

const Header = (props) => {
  return (
    <header>
      <style>
        {`
        nav {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 40px;
          padding: 0 40px;
        }

        nav li {
          list-style: none;
          width: fit-content;
          height: fit-content;
        }

        nav a {
          display: grid;
          place-items: center;
          height: 40px;
          width: 100px;

          text-decoration: none;
          font-weight: 400;
          color: black;
        }

        nav a:hover {
          background-color: black;
          color: white;
        }

        nav a:active {
          background-color: inherit;
          color: black;
        }

        .banner-image {
          height: 370px;
          width: 100%;
          background-image: url('${bannerImage}');
          background-size: cover;
          background-repeat: no-repeat;
          background-position: 0 70%;
        }

        .banner-image::after {
          content: '';
          display: block;
          position: absolute;
          z-index: 2;
          width: inherit;
          height: inherit;
          background-color: rgba(255,255,255,.25);
        }
        `}
      </style>
      <nav>
        <li>
          <a href="#Skills">Skills</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </nav>
      <div className="banner-image" />
      {/* Add credit to picture */}
    </header>
  );
};

export default Header;
