import { useState } from 'react';
import './App.css';
import Header from './Header'; 
import Hero from './Hero'
import Navbar from './Navbar';
function App() {

  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="App">
      <Header onMenuClick={handleMenuClick}/>
      <Hero/>
      {showMenu && <Navbar setShowMenu={setShowMenu} />}

    </div>
  );
}

export default App;
