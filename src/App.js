import { useState, useRef } from 'react';
import './App.css';
import Header from './Header'; 
import Hero from './Hero'
import Navbar from './Navbar';
function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(new Audio('music/new-age.mp3'));
  audioRef.current.loop = true;

  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };




  return (
    <div className="App">
      <Header onMenuClick={handleMenuClick}     isPlaying={isPlaying}
            toggleMusic={toggleMusic}/>
      <Hero/>
      {showMenu && <Navbar setShowMenu={setShowMenu} />}

    </div>
  );
}

export default App;
