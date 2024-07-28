import React, { useRef, useState, useEffect } from 'react';
import { ReactComponent as MuteIcon } from '../assets/mute.svg';
import { ReactComponent as UnmuteIcon } from '../assets/unmute.svg';
import { ReactComponent as EmailIcon } from '../assets/email.svg';
import '../component_styles/AppHeader.css';

function MusicVisualizer({ isPlaying }) {
  return (
    <div className={`visualizer ${isPlaying ? 'playing' : ''}`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className='bar'></div>
      ))}
    </div>
  );
}

function ToggleButton({ isPlaying, toggleMusic }) {
  return (
    <button onClick={toggleMusic} aria-label={isPlaying ? 'Mute' : 'Unmute'}>
      {isPlaying ? <MuteIcon /> : <UnmuteIcon />}
    </button>
  );
}

function Header({ isPlaying, toggleMusic }) {
  const headerRef = useRef(null);
  const [iconColor, setIconColor] = useState('initialColor'); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const backgroundColor = entry.target.getAttribute('data-bg-color');
            setIconColor(backgroundColor === 'dark' ? 'lightColor' : 'darkColor');
          }
        });
      },
      { threshold: 0.5 } 
    );

    const sections = document.querySelectorAll('.background-section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const renderTextWithSpan = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} className='vertical-stack'>
        {char}
      </span>
    ));
  };

  return (
    <div className='header-container'>
      <header className='App-header' ref={headerRef}>
        <div className='header-left'>
          {renderTextWithSpan('NATHANIEL TOZER')}
        </div>
        <div className='header-right'>
          <MusicVisualizer isPlaying={isPlaying} />
          <ToggleButton isPlaying={isPlaying} toggleMusic={toggleMusic} />
          <a href='mailto:natozer@gmail.com' className={`mail ${iconColor}`}>
            <EmailIcon />
          </a>
        </div>
      </header>
    </div>
  );
}

export default Header;
