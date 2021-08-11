import React from 'react'



const Question = ({question, handleChange}) => {

    const onChange = (event) => {
        handleChange(event.target.name, event.target.value)
        
    }

    const answers = question.answerOptions.map((answer) => {
        return (
            <label class="answers" for ={answer.answerText} >
            <input type ="radio" value ={answer.isCorrect} id ={answer.answerText} name ={question.question}/> 
            {answer.answerText}                  
            </label>
            
        )})

    return (
        <div class = "questions"  onChange ={onChange}>
        <h3> {question.questionText}</h3>
        {answers}
        </div>
    )
    
}

export default Question