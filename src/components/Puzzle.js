import React, { useState, useEffect } from 'react';
import cyrillicAlphabet from '../resources/cyrillic.json';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const getRandomIndexFrom = array =>
  getRandomInt(0, array.length)

const removeItemFromArray = (index, array) => 
  array.splice(index, 1)[0]

const getRandomItemsFrom = (numberEntries, array) => {
  let rdItems = []
  let leftItems = [ ...array ]
  while(rdItems.length < numberEntries) {
    const i = getRandomIndexFrom(leftItems)
    const removed = removeItemFromArray(i, leftItems)
    rdItems.push(removed)
  }
  return rdItems
}

const getRandomLetters = () => 
  getRandomItemsFrom(3, Object.values(cyrillicAlphabet))

const Letter = ({ letter, ...others }) =>
  <div className="Letter" { ...others }>
    <p className="LetterText">
      {letter.upper}
    </p>
  </div>

const Option = ({ letter, ...others }) =>
  <div className="Option" { ...others }>
    <p className="OptionText">
      {letter.transliteration}
    </p>
  </div>

const Puzzle = () => {

  const [letters, setLetters] = useState(getRandomLetters());

  const setRandomLetters = () => {
    setLetters(getRandomLetters())
  }

  return (
    <div className="Puzzle">
      <Letter letter={letters[0]} />
      {letters.map((l) =>
        <div key={l.id} onClick={() => setRandomLetters()}>
          <Option letter={l} />
        </div>
      )}
    </div>
  );
}

export default Puzzle;
