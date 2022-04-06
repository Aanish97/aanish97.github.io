import './App.css';
import "@fontsource/montserrat";
import Navbar from "./Components/Navbar/index";
import Intro from "./Components/Intro";
import Education from "./Components/Education";
import Experience from "./Components/Experience";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Intro/>
        <Education/>
        <Experience/>
    </div>
  );
}

export default App;
