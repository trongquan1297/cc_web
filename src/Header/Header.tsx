// src/components/Header.js (ví dụ)
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">AboutMe</Link>
        </li>
        <li>
          <Link to="/snake-game">SnakeGame</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
