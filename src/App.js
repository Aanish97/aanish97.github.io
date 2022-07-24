import './App.css';
import "@fontsource/montserrat";
import Navbar from "./Components/Navbar/index";
import Intro from "./Components/Intro";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Project from "./Components/Projects";
import ClientTestimonials from "./Components/ClientTestimonials";
import Technologies from './Components/Technologies';

const styles = {
  customBorderRadius: {
      borderRadius: '1.3rem',
  },
}

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Intro/>
        <Education/>
        <div class="container text-white py-5 d-md-flex">
          <div class='col-md-6 col-12'>
            <Experience/>
          </div>
          <div className='col-md-6 col-12 bg-dark border' style={styles.customBorderRadius}>
            <Technologies/>
          </div>
        </div>
        <Project/>
        <ClientTestimonials/>
    </div>
  );
}

export default App;
