import './App.css';

import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  document.title = 'Santhosh';
  return (
    <>
      <div className='bg-slate-50 h-full w-full'>
        <NavBar />
        <Home />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
