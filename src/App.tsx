
import AboutMe from "./AboutMe";
import Blog from "./Blog"
import SnakesGame from "./SnakesGame";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./Header";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/snake-game" element={<SnakesGame />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
