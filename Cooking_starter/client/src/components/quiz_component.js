import React from 'react'
import { useState, useEffect } from 'react';
import './quiz_component.css'
import Question from './question_component';


const Quiz = () => { 

    const [scoringTable, setScoringTable] = useState({
      question1: null,
      question2: null,
      question3: null,
      question4: null,
      question5: null,
      question6: null,
      question7: null,
      question8: null,
      question9: null,
      question10: null
    })

    const [finalScore , setFinalScore] = useState(null)
    

    const [questions, setQuestions]  = useState([
    {   
      question: "question1",  
      questionText: 'Lady Finger is a variety of which fruit?',
      answerOptions: [
        { answerText: 'Pineapple', isCorrect: false },
        { answerText: 'Avocado', isCorrect: false },
        { answerText: 'Banana', isCorrect: true },
        { answerText: 'Asparagus', isCorrect: false },
      ],
    },
    {   
        question: "question2",   
      questionText: 'Where does the story about carrots helping people to see in the dark come from?',
      answerOptions: [
        { answerText: 'Old Wives Tale', isCorrect: false },
        { answerText: 'It was made up by the RAF during the Second World War', isCorrect: true },
        { answerText: 'Shakespeare wrote it into his play', isCorrect: false },
        { answerText: 'Originates from the Carrot & Stick Theory', isCorrect: false },
      ],
    },
    {
        question: "question3", 
        questionText: 'How many varieties of potatoes are there?',
        answerOptions: [
          { answerText: '8', isCorrect: false },
          { answerText: '72', isCorrect: false },
          { answerText: 'Hundreds', isCorrect: false },
          { answerText: 'Thousands', isCorrect: true },
        ],
      },
      {
        question: "question4", 
        questionText: 'What type of beans are used to make baked beans?',
        answerOptions: [
          { answerText: 'Butter Beans', isCorrect: false },
          { answerText: 'Pinto Beans', isCorrect: false },
          { answerText: 'Haricot Beans', isCorrect: true },
          { answerText: 'Cranberry Beans', isCorrect: false },
        ],
      },
      {
        question: "question5", 
        questionText: 'Which vitamin are mushrooms high in?',
        answerOptions: [
          { answerText: 'Vitamin A', isCorrect: false },
          { answerText: 'Vitamin B', isCorrect: true },
          { answerText: 'Vitamin C', isCorrect: false },
          { answerText: 'Vitamin CBD', isCorrect: false },
        ],
      },
      {
        question: "question6", 
        questionText: 'Which fruit has varieties including Tommy Atkins, Haden, Kent, Keitt, Ataulfo and Francis?',
        answerOptions: [
          { answerText: 'Mangoes', isCorrect: true },
          { answerText: 'Apples', isCorrect: false },
          { answerText: 'Strawberries', isCorrect: false },
          { answerText: 'Grapes', isCorrect: false },
        ],
      },
      {
        question: "question7", 
        questionText: 'Which is the most expensive spice in the world by weight?',
        answerOptions: [
          { answerText: 'Asafoetida', isCorrect: false },
          { answerText: 'Caraway Seeds', isCorrect: false },
          { answerText: 'Grains of Paradise', isCorrect: false },
          { answerText: 'Saffron', isCorrect: true },
        ],
      },
      {
        question: "question8",
        questionText: 'What percentage of water does an average banana contain?',
        answerOptions: [
          { answerText: '12%', isCorrect: false },
          { answerText: '33%', isCorrect: false },
          { answerText: '60%', isCorrect: false },
          { answerText: '75%', isCorrect: true },
        ],
      },
      {
        question: "question9", 
        questionText: 'Which is the most stolen food in the world?',
        answerOptions: [
          { answerText: 'Cheese', isCorrect: true },
          { answerText: 'Meat', isCorrect: false },
          { answerText: 'Fish', isCorrect: false },
          { answerText: 'Sweets', isCorrect: false },
        ],
      },
      {
        question: "question10", 
        questionText: 'Name five ingredients of a profiterole?',
        answerOptions: [
          { answerText: 'Butter, Flour, Milk, Eggs, Icing Sugar', isCorrect: false },
          { answerText: 'Flour, Cream, Sugar, Eggs, Water', isCorrect: false },
          { answerText: 'Eggs, Butter, Cream, Flour, Sugar', isCorrect: true },
          { answerText: 'Caster Sugar, Vegetable Oil, Cream, Flour, Eggs', isCorrect: false }
        ],
      },
])

    const handleClick = () => {
      setFinalScore(null)
    }
    const handleChange = (questionId, answerBool) => {
          const answerBoolean = (answerBool === "true")
          setScoringTable( {...scoringTable , [questionId] : answerBool}) 
         
    }

    const scoreCalc = () => {
      return Object.values(scoringTable).reduce(( toBeAddedTo, valueInArray ) => {
          return toBeAddedTo + (valueInArray ==="true") 
    }, 0)
    }

    const onSubmit = (event) =>{
      event.preventDefault();
      setFinalScore(scoreCalc())

    } 

    const allQuestions = questions.map((question) => {
        return (
          
            <Question question ={question} handleChange ={handleChange} key ={question.question}/>
           
          )
      })
         

      const displayResult = () => {
        if (finalScore) {
          return (
            <>
            <button onClick ={handleClick}> Return to Quiz! </button>
            <h1> Your Result</h1>
            <h3> Your Score Is {finalScore} out of 10 Questions!</h3>
            </>
          )}
        else {
          return  (<form onSubmit ={onSubmit}>
          {allQuestions}
          <button type = "submit"> Submit Answers!</button>
        </form>)
        }
      }
 
return (
    <div class="quiz-component" >
        
   <h2> Quiz element</h2>
       {displayResult()}
    </div>
)

}
export default Quiz;