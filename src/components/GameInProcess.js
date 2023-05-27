import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Stopwatch from './Stopwatch';

export default function GameInProcess ({ toggleGameStarted, clickResponse, 
  showCharacterMenu, charMenuResponse, getCoordsFromCloud, comparisonObject,
  markFoundChar, foundChars, checkIfAllFound, foundAll, removeCharacterMenu,
  time, setTime, isRunning, setIsRunning }) {
  const handleClick = async (e) => {
    charMenuResponse(e);
    getCoordsFromCloud();
    //Coords from cloud are async
    const comparisonObjectCopy = await comparisonObject;
    markFoundChar(comparisonObjectCopy);
    //Await on foundChars because of cloud coords
    const foundCharsCopy = await foundChars;
    checkIfAllFound(foundCharsCopy);
    //Clear Character menu
    removeCharacterMenu();
  }

  //Start stopwatch when game starts. stop when all characters are found
  useEffect(() => {
    setIsRunning(!isRunning);
  }, [foundAll])

  return(
    <div className='game-in-process-screen'>
      <Link to="/" onClick={toggleGameStarted}>Back to Menu</Link>

      <Stopwatch
        time={time} setTime={setTime} isRunning={isRunning} setIsRunning={setIsRunning} />

      <div>
        <p>Spongebob:{foundChars.spongebob ? "Found" : "Not found"}</p>
        <p>Hellboy:{foundChars.hellboy ? "Found" : "Not found"}</p>
        <p>Yoshi:{foundChars.yoshi ? "Found" : "Not found"}</p>
        <p>Mickey Mouse:{foundChars.mickeyMouse ? "Found" : "Not found"}</p>
        <p>Beavis and Butt-Head:{foundChars.beavisAndButthead ? "Found" : "Not found"}</p>
      </div>

      <map name="image-map" onClick={showCharacterMenu}>
        <area target="_blank" alt="spongebob" coords="1215,336,1253,334,1251,384,1222,383" shape="poly" onClick={clickResponse} />
        <area target="_blank" alt="hellboy" coords="739,623,707,629,696,586,726,570" shape="poly" onClick={clickResponse} />
        <area target="_blank" alt="yoshi" coords="129,540,120,553,106,547,101,520,126,520" shape="poly" onClick={clickResponse} />
        <area target="_blank" alt="mickey mouse" coords="1272,163,1295,188,1321,168,1322,138,1286,134" shape="poly" onClick={clickResponse} />
        <area target="_blank" alt="beavis and butthead" coords="213,225,153,228,164,297,211,296" shape="poly" onClick={clickResponse} />
      </map>

      <img 
        src='https://firebasestorage.googleapis.com/v0/b/photo-tagging-app-b3302.appspot.com/o/game-image.jpg?alt=media&token=5162c8cf-d746-452a-8ea8-1f39fb59a7eb' 
        alt='game characters collage' 
        useMap="#image-map"
        className="game-image"
        onClick={showCharacterMenu} />

      <div className='character-selection' >
        <button 
          data-id='spongebob'
          onClick={handleClick}
          >Spongebob</button>
        <button 
          data-id='hellboy'
          onClick={handleClick}
          >Hellboy</button>
        <button 
          data-id='yoshi'
          onClick={handleClick}
          >Yoshi</button>
        <button 
          data-id='mickeyMouse'
          onClick={handleClick}
          >Mickey Mouse</button>
        <button 
          data-id='beavisAndButthead'
          onClick={handleClick}
          >Beavis and Butt-Head</button>
      </div>
    </div>
  )
}
