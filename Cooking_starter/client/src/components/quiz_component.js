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

    const setAnswer = function(questionId, answerBool){
      // setScoringTable({...scoringTable, questionId: answerBool})
      console.log(questionId, answerBool)
    }

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

// const handleChange = (event) => {
//        console.log(event.target)
//        if (event.target.value) {
//         setAnswers([...answers, event.target.value])
//        }
//        console.log(answers)
//     }
// onChange ={handleChange}

 const allQuestions = questions.map( (question) => {
         return <div class="questions" >
             <h3> {question.questionText} :</h3>

             {question.answerOptions.map(answer => {
                return (
                    <label class="answers" for ={answer.answerText} >
                    <input type ="radio" value ={answer.isCorrect} id ={answer.answerText} name ={question.questionText}/> 
                    {answer.answerText}                  
                    </label>
                )})}   
                </div>
     })
 


 

return (
    <div class="quiz-component" >
        
   <h2> Quiz element</h2>
        <form>
            <Question questions ={questions}/>
      {allQuestions}
        <button type = "submit"> Submit Answers!</button>
        </form>
    </div>
)

}
export default Quiz;