import './App.css';
import "@fontsource/montserrat";
import Navbar from "./Components/Navbar/index";
import Intro from "./Components/Intro";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Project from "./Components/Projects";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Intro/>
        <Education/>
        <Experience/>
        <Project/>
    </div>
  );
}

export default App;
