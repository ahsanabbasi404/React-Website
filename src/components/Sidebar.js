import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faGamepad, faPlayCircle, faTrophy } from '@fortawesome/free-solid-svg-icons';

const twinkling = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 1000px 500px; }
`;

const SidebarContainer = styled.div`
  background-color: #2c3e50;
  width: 250px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
  font-family: 'Roboto', sans-serif;
  overflow: hidden;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: url('https://i.pinimg.com/originals/17/2d/3c/172d3ca203948062edffc03aa5c412a3.gif');
    opacity: 0.5;
    top: 0;
    left: 0;
    z-index: -1;
    animation: ${twinkling} 20s linear infinite;
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 3px; /* Adjust the width of the border */
    height: 100%;
    background: linear-gradient(to bottom, red, orange, yellow, green, blue, indigo, violet); /* Adjust colors */
    animation: borderAnimation 6s ease-in-out infinite;
  }

  @keyframes borderAnimation {
    0%, 100% {
      height: 0;
    }
    50% {
      height: 100%;
    }
    55% {
      height: 100%;
      animation-timing-function: cubic-bezier(0.5, 0, 0.5, 1); /* Pause at the end */
    }
    100% {
      height: 0;
    }
  }
`;


const SidebarContent = styled.div`
  padding: 20px;
  color: #fff;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  font-family: 'Bangers', cursive;
`;

const MenuList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  margin-bottom: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(5px);
  }
`;

const MenuLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 20px;
  display: flex;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  transition: color 0.3s ease;

  &:hover {
    color: #f39c12;
  }
`;
const GameSelectionContainer = styled.div`
  color: #fff;
  padding: 10px;

  p {
    margin-bottom: 10px;
  }

  button {
    background-color: #f39c12;
    color: #fff;
    border: none;
    padding: 8px 16px;
    margin-right: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #e67e22;
    }
  }
`;
const Sidebar = ({ handleGameSelection }) => {
    const [showHelpDialog, setShowHelpDialog] = useState(false);
    const handlePlayGameClick = () => {
        // Invoke the callback function with the selected game
        handleGameSelection(selectedGame);
      };
    const handleHelpClick = () => {
      setShowHelpDialog(true);
    };
  
    const handleCloseHelpDialog = () => {
      setShowHelpDialog(false);
    }; 
  const [selectedGame, setSelectedGame] = useState(null);

  const handleGameSelect = (game) => {
    setSelectedGame(game);
  };


  const SelectedGameLabel = styled.div`
  background-color: #3498db;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
  font-size: 18px;
  display: inline-block;
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const DialogBox = styled.div`
  
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  max-width: 80%;
`;
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: #fff;
  font-size: 70px;
  cursor: pointer;
  z-index: 1001;
  padding: 0;
  outline: none;

  &:hover {
    color: #f39c12;
  }
`;


  return (
    <SidebarContainer>
      <SidebarContent>
        <Title>Arcade Menu</Title>
        <MenuList>
          <MenuItem>
            <MenuLink href="#" onClick={handleHelpClick}>
              <FontAwesomeIcon icon={faQuestionCircle} style={{ marginRight: '10px' }} />
              Help
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="#" onClick={() => handleGameSelect('Selected Game')}>
              <FontAwesomeIcon icon={faGamepad} style={{ marginRight: '10px' }} />
              Select Game
            </MenuLink>
          </MenuItem>
          {/* 'Play Game' option */}
          <MenuItem>
            <MenuLink href="#" onClick={handlePlayGameClick}>
              <FontAwesomeIcon icon={faPlayCircle} style={{ marginRight: '10px' }}  />
              Play Game
            </MenuLink>
          </MenuItem>
          {/* Highscores option */}
          <MenuItem>
            <MenuLink href="#">
              <FontAwesomeIcon icon={faTrophy} style={{ marginRight: '10px' }} />
              Highscores
            </MenuLink>
          </MenuItem>
        </MenuList>
        {/* Game selection modal */}
        {selectedGame === 'Selected Game' && (
          <GameSelectionContainer>
            <p>Select a game:</p>
            <button onClick={() => handleGameSelect('Toss Coin')}>Toss Coin</button>
            <button onClick={() => handleGameSelect('Tic Tac Toe')}>Tic Tac Toe</button>
            <button onClick={() => handleGameSelect('Memory Game')}>Memory Game</button>
          </GameSelectionContainer>
        )}
        {/* Help dialog */}
        {showHelpDialog && (
          <Overlay>
            <DialogBox>
              <CloseButton onClick={handleCloseHelpDialog}>&times;</CloseButton>
              <h2>Help</h2>
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestias vitae, sit exercitationem dolorum cumque quaerat, porro veritatis vel maxime blanditiis neque laboriosam esse eum unde laudantium consectetu   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestias vitae, sit exercitationem dolorum cumque quaerat, porro veritatis vel maxime blanditiis neque laboriosam esse eum unde laudantium consectetu   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestias vitae, sit exercitationem dolorum cumque quaerat, porro veritatis vel maxime blanditiis neque laboriosam esse eum unde laudantium consectetur veniam nesciunt!
              </p>
            </DialogBox>
          </Overlay>
        )}
        {/* Highscores tables */}
        {/* ... Highscores tables */}
      </SidebarContent>
      {/* Display selected game label */}
      {selectedGame && selectedGame !== 'Selected Game' && (
       <SelectedGameLabel>
       Selected Game: {selectedGame}
     </SelectedGameLabel>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;