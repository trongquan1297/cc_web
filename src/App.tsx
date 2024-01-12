import { useState } from "react";
import AboutMe from "./AboutMe";
import Blog from "./Blog"
import SnakesGame from "./SnakesGame";
import Navigation from "./Navigation";

function App(){
  const [selectedCategory, setSelectedCategory] = useState('Aboutme');

  const renderContent = () => {
    switch (selectedCategory) {
      case 'Aboutme':
        return <AboutMe />;
      case 'Snakegame':
        return <SnakesGame />;
      case 'Blog':
        return <Blog />;
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <Navigation onSelectCategory={setSelectedCategory} />
      <div className="content">{renderContent()}</div>
    </div>
  );
}

export default App;
