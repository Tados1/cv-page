import './index.css';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import MySkills from './components/MySkills';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutMe />
      <MySkills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
