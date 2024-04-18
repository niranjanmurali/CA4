import React, { useState } from 'react';
import questions from '../question';
import "./questionBox.css"
import Result from './Result';

export default function QuestionBox() {
  // const [mode, setmode] = useState(false);

  //setting useStates
  const [count, setcount] = useState(0);
  const [Highlight, sethighlight] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [score, setscore] = useState(0);


  //destructuring the text and options from questions
  const { text, options} = questions[count];


//checking for correct answer and increasing score
  const next = (selectedOption) => {
    if (count === questions.length - 1) {
      setShowResult(true); 
    } else {
      setcount(count + 1);
    }

    if (selectedOption.isCorrect) {
      setscore(score + 1);
    }
  };
    window.localStorage.setItem("score",score)


  const ishighlight = () => {
    sethighlight(true);
  };

  const removehighlight = () => {
    sethighlight(false);
  };

  // const changeMode = () => {
  //   setmode(!mode);
  // };

  return (
    //conditional rendering to show result page
    <div>
      {showResult ? (
        <Result />
      ) : (
        
        <div className='question-container'>
          <div>
            <h2 className='question' style={{ color: Highlight ? "red" : "" }}>Question:{count + 1} out of 5</h2>
            <h2 className='question-text' style={{ color: Highlight ? "red" : "" }}>{text}</h2>
            <div className='options' onClick={() => { next(options[0]) }}>{options[0].text}</div>
            <div className='options' onClick={() => { next(options[1]) }}>{options[1].text}</div>
            <div className='options' onClick={() => { next(options[2]) }}>{options[2].text}</div>
            <div className='options' onClick={() => { next(options[3]) }}>{options[3].text}</div>
            <div className='btn-cont'>
            <button className='highlight-btn' onClick={ishighlight} >Highlight</button>
            <button className='remove-highlight-btn' onClick={removehighlight}>remove Highlight</button>
            </div>
          </div>
        </div>
        
      )}
    </div>
  );
}