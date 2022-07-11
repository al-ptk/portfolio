import './stylesheets/Header.css';

const Header = (props) => {
  return (
    <header>
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
