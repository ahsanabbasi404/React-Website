import React from 'react';
import Sidebar from './components/Sidebar';
import Game1 from './components/Game1'
import Game2 from './components/Game2'
import Game3 from './components/Game3'
import BubbleGame from './components/BubbleGame';
export default function MainBody() {
  const remainingStyles = {
    flex: 1,
    backgroundImage: `url('https://i.pinimg.com/originals/d0/e0/e2/d0e0e259bf0aba4da742bedff1d4b8a5.gif')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh', // Ensures the div takes full height of the viewport
  };
  let gameComponent= 'a';
  const handleGameSelection = (game) => {
    // Do something with the selected game (game variable)
    console.log(`Selected game: ${game}`);
    gameComponent = game;
  };
  return (
    <div style={{ display: 'flex', position: 'relative',}}>
      <Sidebar handleGameSelection={handleGameSelection}/>
      <div style={{ flex: '1', position: 'relative' }}>
        {(() => {
          if (gameComponent == 'Memory Game') {
            return <Game1 />;
          } else if (gameComponent === 'game2') {
            return <Game2 />;
          } else if (gameComponent === 'game3') {
            return <Game3 />;
          } else {
            return <><div style={remainingStyles}></div><BubbleGame /></>; // or any default component
          }
        })()}
      </div>
    </div>
  );
  
  
  
  
}
