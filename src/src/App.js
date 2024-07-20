import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { gsap } from 'gsap';
import SnowScene from './components/SnowScene';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import backgroundMusic from './assets/gaia.mp3';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [splashScreenVisible, setSplashScreenVisible] = useState(true);

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

  const handleEnterSite = () => {
    if (!isPlaying) {
      toggleMusic();
    }
    gsap.to(splashScreenRef.current, { duration: 1, opacity: 0, onComplete: () => setSplashScreenVisible(false) });
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
          <Header isPlaying={isPlaying} toggleMusic={toggleMusic} />
          <Hero />
          <AboutMe />
          <Experience />
          <Footer />
        </>
      )}


      <div className="credits-button-container">
        <div className="credits-button">CREDITS</div>
        <div className="credits-container">
          <span>Fonts are PPNeue Montreal and BTSuave. This site is a personal demo project. No money is being made through this site.</span>
        </div>
      </div>
    </div>
  );
}

export default App;
