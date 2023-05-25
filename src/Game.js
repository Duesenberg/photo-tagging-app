import React, { useState } from "react";
import IntroScreen from "./components/IntroScreen";
import GameInProcess from "./components/GameInProcess";

export default function Game () {
  const [gameStarted, setGameStarted] = useState(false);

  //Toggling gameStarted to true removes the intro page when starting game
  const toggleGameStarted = () => {
    gameStarted === false ? setGameStarted(true) : setGameStarted(false);
  }

  //Testing if image map works
  const clickResponse = (e) => {
    switch (e.target.alt) {
      case "spongebob":
        console.log("spongebob");
        break;
      case "hellboy":
        console.log("hellboy");
        break;
      case "yoshi":
        console.log("yoshi");
        break;
      case "mickey mouse":
        console.log("mickey mouse");
        break;
      case "beavis and butthead":
        console.log("beavis and butthead");
        break;
      default: 
        console.log("miss");
        break;
    }
  }

  const showCharacterMenu = (e) => {
    //Add class of active to the menu, so it overrides display: none
    const characterMenu = document.querySelector('.character-selection');
    characterMenu.classList.add('active');
    //Positioning menu where click has occured
    characterMenu.style.position = 'absolute';
    if (e.pageY > 500) characterMenu.style.top = `${e.pageY - 200}px`;
    else characterMenu.style.top = `${e.pageY}px`
    if (e.pageX > 1000) characterMenu.style.left = `${e.pageX - 200}px`
    else characterMenu.style.left = `${e.pageX}px`;
  }

  //Test responsiveness of character selection menu
  const charMenuResponse = (e) => {
    switch (e.target.dataset.id) {
      case "spongebob":
        console.log("spongebob");
        break;
      case "hellboy":
        console.log("hellboy");
        break;
      case "yoshi":
        console.log("yoshi");
        break;
      case "mickey mouse":
        console.log("mickey mouse");
        break;
      case "beavis and butthead":
        console.log("beavis and butthead");
        break;
      default: 
        console.log("miss");
        break;
    }
  }

  return(
    <div className="game-screen">
      {gameStarted === false ?
      <IntroScreen toggleGameStarted={toggleGameStarted} /> :
      <GameInProcess 
        toggleGameStarted={toggleGameStarted}
        clickResponse={clickResponse} 
        showCharacterMenu={showCharacterMenu}
        charMenuResponse={charMenuResponse}/>}
    </div>
  )
}
