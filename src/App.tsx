import { useState } from "react";
import { useSpring, animated } from "react-spring";
import AboutMe from "./AboutMe";
import Blog from "./Blog"
import SnakesGame from "./SnakesGame";

const tabs = ["AboutMe", "SnakesGame", "Blog"];

const App = () => {
  const [activeTab, setActiveTab] = useState<number>(0);;

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  const tabStyles = useSpring({
    transform: `translate3d(0, ${-activeTab * 100}%, 0)`,
  });

  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY > 0) {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    } else {
      setActiveTab((prev) => (prev - 1 + tabs.length) % tabs.length);
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}
        onWheel={handleWheel}
    >
      {/* Category on the left */}
      <div
        style={{
          width: "200px",
          backgroundColor: "#f0f0f0",
          borderRight: "1px solid #ccc",
        }}
      >
        {tabs.map((tab, index) => (
          <div
            key={index}
            style={{
              padding: "10px",
              cursor: "pointer",
              fontWeight: activeTab === index ? "bold" : "normal",
            }}
            onClick={() => handleTabChange(index)}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Content on the right with tab transition effect */}
      <animated.div
        style={{
          flex: 1,
          overflowY: "hidden",
          ...tabStyles,
        }}
      >
        <AboutMe visible={activeTab === 0} />
        <SnakesGame visible={activeTab === 1} />
        <Blog visible={activeTab === 2} />
      </animated.div>
    </div>
  );
};

export default App;
