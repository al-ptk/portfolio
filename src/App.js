import './App.css';
import './i18n';
import Header from './component/Header';
import HeroIntro from './component/HeroIntro';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroIntro />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
