import React from 'react'
import { useState, useEffect } from 'react';
import './quiz_component.css'


const Quiz = () => { 

    
    const [questions, setQuestions]  = useState([
    {
      questionText: 'Lady Finger is a variety of which fruit?',
      answerOptions: [
        { answerText: 'Pineapple', isCorrect: false },
        { answerText: 'Avocado', isCorrect: false },
        { answerText: 'Banana', isCorrect: true },
        { answerText: 'Asparagus', isCorrect: false },
      ],
    },
    {
      questionText: 'Where does the story about carrots helping people to see in the dark come from?',
      answerOptions: [
        { answerText: 'Old Wives Tale', isCorrect: false },
        { answerText: 'It was made up by the RAF during the Second World War', isCorrect: true },
        { answerText: 'Shakespeare wrote it into his play', isCorrect: false },
        { answerText: 'Originates from the Carrot & Stick Method', isCorrect: false },
      ],
    },
    {
        questionText: 'How many varieties of potatoes are there?',
        answerOptions: [
          { answerText: '8', isCorrect: false },
          { answerText: '72', isCorrect: false },
          { answerText: 'Hundreds', isCorrect: false },
          { answerText: 'Thousands', isCorrect: true },
        ],
      },
      {
        questionText: 'What type of beans are used to make baked beans?',
        answerOptions: [
          { answerText: 'Butter Beans', isCorrect: false },
          { answerText: 'Pinto Beans', isCorrect: false },
          { answerText: 'Haricot Beans', isCorrect: true },
          { answerText: 'Cranberry Beans', isCorrect: false },
        ],
      },
      {
        questionText: 'Which vitamin are mushrooms high in?',
        answerOptions: [
          { answerText: 'Vitamin A', isCorrect: false },
          { answerText: 'Vitamin B', isCorrect: true },
          { answerText: 'Vitamin C', isCorrect: false },
          { answerText: 'Vitamin CBD', isCorrect: false },
        ],
      },
      {
        questionText: 'Which fruit has varieties including Tommy Atkins, Haden, Kent, Keitt, Ataulfo and Francis?',
        answerOptions: [
          { answerText: 'Mangoes', isCorrect: true },
          { answerText: 'Apples', isCorrect: false },
          { answerText: 'Strawberries', isCorrect: false },
          { answerText: 'Grapes', isCorrect: false },
        ],
      },
      {
        questionText: 'Which is the most expensive spice in the world by weight?',
        answerOptions: [
          { answerText: 'Asafoetida', isCorrect: false },
          { answerText: 'Caraway Seeds', isCorrect: false },
          { answerText: 'Grains of Paradise', isCorrect: false },
          { answerText: 'Saffron', isCorrect: true },
        ],
      },
      {
        questionText: 'What percentage of water does an average banana contain?',
        answerOptions: [
          { answerText: '12%', isCorrect: false },
          { answerText: '33%', isCorrect: false },
          { answerText: '60%', isCorrect: false },
          { answerText: '75%', isCorrect: true },
        ],
      },
      {
        questionText: 'Which is the most stolen food in the world?',
        answerOptions: [
          { answerText: 'Cheese', isCorrect: true },
          { answerText: 'Meat', isCorrect: false },
          { answerText: 'Fish', isCorrect: false },
          { answerText: 'Sweets', isCorrect: false },
        ],
      },
      {
        questionText: 'Name five ingredients of a profiterole?',
        answerOptions: [
          { answerText: 'Butter, Flour, Milk, Eggs, Icing Sugar', isCorrect: false },
          { answerText: 'Flour, Cream, Sugar, Eggs, Water', isCorrect: false },
          { answerText: 'Eggs, Butter, Cream, Flour, Sugar', isCorrect: true },
          { answerText: 'Caster Sugar, Vegetable Oil, Cream, Flour, Eggs', isCorrect: false }
        ],
      },
])

const handleChange = (event) => {
       event.target.style.backgroundColor = "hotpink"
       console.log(event.target)
    }


 const allQuestions = questions.map( (question) => {
         return <div class="questions" onChange ={handleChange}>
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
      {allQuestions}
   </div>
)

}
export default Quiz;