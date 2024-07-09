import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { gsap } from 'gsap';
import SnowScene from './components/SnowScene';
import Header from './components/Header';
import ContactMe from './components/Contact';
import Hero from './components/Hero';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import backgroundMusic from './assets/cinematic-fantasy-dark.mp3';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [splashScreenVisible, setSplashScreenVisible] = useState(true);
  const [hasEnteredSite, setHasEnteredSite] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const audioRef = useRef(new Audio(backgroundMusic));
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
    if (!isPlaying) {
      toggleMusic();
    }
    gsap.to(splashScreenRef.current, { duration: 1, opacity: 0, onComplete: () => setSplashScreenVisible(false) });
    setHasEnteredSite(true);
  };

  useEffect(() => {
    const currentAudio = audioRef.current;

    return () => {
      currentAudio.pause();
    };
  }, []);

  return (
    <div className="App">
      <SnowScene />
      {splashScreenVisible ? (
        <SplashScreen onEnterSite={handleEnterSite} />
      ) : (
        <>
          <Header isPlaying={isPlaying} toggleMusic={toggleMusic} onContactClick={handleContactClick} />
          <Hero hasEnteredSite={hasEnteredSite} />
          {showContact && <ContactMe setShowContact={setShowContact} />}
          <Footer />
        </>
      )}
      <div className="credits-button-container">
        <div className="credits-button">CREDITS</div>
        <div className="credits-container">
          <span>Fonts are Alagard, Migha, Kayak, and Neue Montreal. Music by Roman Senyk from Pixabay. Background image by Franz26 from Pixabay. Personal use only. No money is being made through this site.</span>
        </div>
      </div>
    </div>
  );
}

export default App;
