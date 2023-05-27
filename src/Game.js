import React, { useState } from "react";
import IntroScreen from "./components/IntroScreen";
import GameInProcess from "./components/GameInProcess";

export default function Game ({ areasDoc }) {
  const [gameStarted, setGameStarted] = useState(false);
  //Holds data which is compared to assess if guess is correct.
  //1st value taken when guessing character, second value taken when clicking
  //on character, third value taken from cloud, based on guessedChar
  const [comparisonObject, setComparisonObject] = useState({
    guessedChar: null,
    clickedCharCoords: null,
    cloudStorageCoords: null
  });

  //Holds data about which characters have been located
  const [foundChars, setFoundChars] = useState({
    spongebob: false,
    hellboy: false,
    yoshi: false,
    mickeyMouse: false,
    beavisAndButthead: false
  });

  //Should turn to true once all characters have been found
  const [foundAll, setFoundAll] = useState(false);

  // state to store time
  const [time, setTime] = useState(0);

  // state to check stopwatch running or not
  const [isRunning, setIsRunning] = useState(false);

  //Toggling gameStarted to true removes the intro page when starting game
  const toggleGameStarted = () => {
    gameStarted === false ? setGameStarted(true) : setGameStarted(false);
  }

  //Sets value of clickedCharCoords in comparisonObject depending on click
  const clickResponse = (e) => {
    let comparisonObjectCopy = comparisonObject;
    comparisonObjectCopy.clickedCharCoords = e.target.coords;
    setComparisonObject(comparisonObjectCopy);
  }

  //Bring up character selection menu
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
    //Remove class of active after 5s
    setTimeout(() => {characterMenu.classList.remove('active')}, 3000);
  }

  //Removes char menu by removing class of active
  //Used in handleClick in GameInProcess.js
  const removeCharacterMenu = () => {
    const characterMenu = document.querySelector('.character-selection');
    characterMenu.classList.remove('active');
  }

  //Set value of guessedChar based on menu selection
  const charMenuResponse = (e) => {
    let comparisonObjectCopy = comparisonObject;
    comparisonObjectCopy.guessedChar = e.target.dataset.id;
    setComparisonObject(comparisonObjectCopy);
  }

  //Gets coordinates about menu selected char from cloud firestore
  const getCoordsFromCloud = async () => {
    const cloudData = (await areasDoc).data();
    const guessedChar = comparisonObject.guessedChar;
    const charCoords = cloudData[`${guessedChar}`];
    let comparisonObjectCopy = comparisonObject;

    comparisonObjectCopy.cloudStorageCoords = charCoords;
    setComparisonObject(comparisonObjectCopy);
  }

  //Compare if coords of clicked char are the same as guessed char coords
  const checkIfCorrect = () => {
    let match;
    if (comparisonObject.clickedCharCoords === comparisonObject.cloudStorageCoords) match = true;
    else match = false;
    return match;
  }

  //Mark character in foundChars if guessed correctly
  const markFoundChar = (comparisonObject) => {
    //Check if character is found
    const charFound = checkIfCorrect(comparisonObject);
    let foundCharsCopy = foundChars;
    //If found, mark it in foundChars
    if (charFound === true) foundCharsCopy[comparisonObject.guessedChar] = true;
    setFoundChars(foundCharsCopy);
  }

  //Sets foundAll to true when all chars are found
  const checkIfAllFound = (foundChars) => {
    let found = false;
    let foundCount = 0;
    //Loop through all characters. add 1 if a value is true
    for (let char in foundChars) {
      if (foundChars[char] === true) foundCount += 1;
    }
    //If count goes to 5, all chars are found
    if (foundCount === 5) found = true;
    setFoundAll(found);
  }

  return(
    <div className="game-screen">
      {gameStarted === false ?
      <IntroScreen toggleGameStarted={toggleGameStarted} /> :
      <GameInProcess 
        toggleGameStarted={toggleGameStarted}
        clickResponse={clickResponse} 
        showCharacterMenu={showCharacterMenu}
        charMenuResponse={charMenuResponse}
        getCoordsFromCloud={getCoordsFromCloud}
        comparisonObject={comparisonObject}
        markFoundChar={markFoundChar}
        foundChars={foundChars}
        checkIfAllFound={checkIfAllFound}
        foundAll={foundAll}
        removeCharacterMenu={removeCharacterMenu}
        time={time} setTime={setTime} isRunning={isRunning} setIsRunning={setIsRunning} />}
    </div>
  )
}
