import './App.css';
import './i18n';
import Header from './component/Header';
import HeroIntro from './component/HeroIntro';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Footer from './component/Footer';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  const [currLng, setCurrLng] = useState(i18n.options.lng);
  const title = useRef(document.querySelector('title'));

  useEffect(() => {
    i18n.changeLanguage(currLng);
  }, [i18n, currLng]);

  useEffect(() => {
    title.current.textContent = t('PageTitle');
  });

  return (
    <div className="App">
      <Header {...{ setCurrLng }} />
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
