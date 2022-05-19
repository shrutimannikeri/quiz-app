import React from 'react';
import {useState} from 'react'
import './App.css'
const App = () => {
  const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];
  const [currentQuestion, setCurrentQuestion]=useState(0);
  const [score, setScore]=useState(0);
  const [showScore,setShowScore]=useState(false)
const handleAnswerOptionClick=(isCorrect)=>{
 if(isCorrect){
  setScore(score+1)
 }
 const nextQuetion =currentQuestion+1
 if(nextQuetion<questions.length){
  setCurrentQuestion(nextQuetion);
 }
 else{
   setShowScore(true)
 }
};
  return (
    <div className='app'>
      {showScore ? (
        <div className='score-section'>
            You scored {score} out of {questions.length}
        </div>):(
          <>
       <div className='question-section'>
         <div className='score-quetionsection'>
         <div className='question-count'>
           <span>Quetion{currentQuestion + 1}</span>/{questions.length}
         </div>
         <div className='quetion-text'>{questions[currentQuestion].questionText}</div>
         </div>
         <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answeroption)=>(
              <button onClick={()=>handleAnswerOptionClick(answeroption.isCorrect)}>{answeroption.answerText}</button>
            ))}
         </div>
       </div>
       </>
        )}
    </div>
  )
}

export default App
