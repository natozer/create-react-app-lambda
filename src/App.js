import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { gsap } from 'gsap';
import SnowScene from './components/SnowScene';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import ContactMe from './components/Contact';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [splashScreenVisible, setSplashScreenVisible] = useState(true);
  const [hasEnteredSite, setHasEnteredSite] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const audioRef = useRef(new Audio('audio/background-drum-and-bass.mp3'));
  audioRef.current.loop = true;

  const splashScreenRef = useRef(null);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleContactClick = () => {
    setShowContact(!showContact);
  };

  const handleEnterSite = () => {
    toggleMusic();
    gsap.to(splashScreenRef.current, { duration: 1, opacity: 0, onComplete: () => setSplashScreenVisible(false) });
    setHasEnteredSite(true);
    document.body.classList.remove('no-scroll');
  };

  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
      window.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
              <SnowScene />

      {splashScreenVisible ? (
        <div className="splash-screen">
          <div className="button-container">
            <button onClick={handleEnterSite}>Enter Site</button>
          </div>
        </div>


      ) : (
        <>
          <Header
            isPlaying={isPlaying}
            toggleMusic={toggleMusic}
            onContactClick={handleContactClick}
          />
          <Hero hasEnteredSite={hasEnteredSite} />
          <AboutMe />
          <Experience />
          {showContact && <ContactMe setShowContact={setShowContact} />}
          <Footer/>
        </>
      )}
      <div className="credits-button-container">
        <div className="credits-button">CREDITS</div>
        <div className="credits-container">
          <span>Fonts are Road Rage, Neue Montreal, and 2049. Music by Ivymusic on Pixabay. Background image by Franz26 on Pixabay. Personal use only. No money is being made through this site.  </span>
        </div>
      </div>
    </div>
  );
}

export default App;
