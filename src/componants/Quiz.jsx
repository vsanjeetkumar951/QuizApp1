import React, { useState } from "react";
import { QuizData } from "./QuizData";

function Quiz() {
  const [curruntQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [checkedOption, setCheckedOption] = useState(0);

  function changeQuestion() {
    updeteOption();
    if (curruntQuestion < QuizData.length - 1) {
      setCurrentQuestion(curruntQuestion + 1);
      setCheckedOption(0)
    } else {
      
    }
  }
  function prevQuestion() {
if(curruntQuestion<QuizData){

  setCurrentQuestion(changeQuestion-1)
}

  }
  function updeteOption() {
    if (checkedOption === QuizData[curruntQuestion].answer) {
      setScore(score + 1);
    }
  }
  function clickReset() {
    setCheckedOption(0);
    setScore(0);
    setCurrentQuestion(0)


  }
  return (
    <div>
      <h1>Quiz App</h1>
      <div className="main">
        <div className="question">
          <span>{QuizData[curruntQuestion].question}</span>
        </div>
        {QuizData[curruntQuestion].options.map((value, i) => {
          return (
            <button
              className={`option-btn ${
                checkedOption == i + 1 ? "checked" : null
              }`}
              key={i}
              onClick={() => setCheckedOption(i + 1)}
            >
              {value}
            </button>
          );
        })}
      </div>
      <input type="button" value="Next" onClick={changeQuestion} />
      <input type="button" value="Prev" onClick={prevQuestion} />

      <input type="button" value="reset" onClick={clickReset} />
    </div>
  );
}

export default Quiz;
