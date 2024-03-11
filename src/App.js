import { useState, useRef } from 'react';
import './App.css';
import Header from './Header'; 
import Hero from './Hero'
function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(new Audio('music/new-age.mp3'));
  audioRef.current.loop = true;

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
      <Header isPlaying={isPlaying}
            toggleMusic={toggleMusic}/>
      <Hero/>
    </div>
  );
}

export default App;
