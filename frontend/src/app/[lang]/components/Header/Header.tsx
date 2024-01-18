"use client"
// src/components/Header.js (ví dụ)
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav>
      <ul className="nav">
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
