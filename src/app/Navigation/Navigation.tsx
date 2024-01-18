import React from 'react';

interface NavigationProps {
  onSelectCategory: (category: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSelectCategory }) => {
  return (
    <div className="navigation">
      <h2>Categories</h2>
      <ul>
        <li onClick={() => onSelectCategory('Aboutme')}>About Me</li>
        <li onClick={() => onSelectCategory('Snakegame')}>Snake Game</li>
        <li onClick={() => onSelectCategory('Blog')}>Blog</li>
      </ul>
    </div>
  );
};

export default Navigation;