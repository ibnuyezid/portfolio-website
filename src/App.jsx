import { useContext } from "react";
import About from "./component/about/About";
import Contact from "./component/contact/Contact";
import Intro from "./component/Intro/Intro";
import Navbar from "./component/Navbar/Navbar";
import Project from "./component/project/Project";
import { ThemeContext } from "./context";

const App = () => {
  const them = useContext(ThemeContext);
  console.log(them);
  return (
    <div
      style={{
        overflow: "hidden",
        backgroundColor: them.state.darkMode ? "#222" : "#fff",
        color: them.state.darkMode && "#c7c4c4",
      }}
    >
      <Navbar />
      <Intro />
      <About />
      <Project />
      <Contact />
    </div>
  );
};

export default App;
