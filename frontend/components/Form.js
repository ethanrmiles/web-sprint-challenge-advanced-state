import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import { useEffect } from 'react'

export function Form(props) {
const {
  form,
  inputChange,
  postQuiz,
  setMessage,
  } = props

 
  const onChange = evt => {
    const value = evt.target.value
    const name = evt.target.id
    inputChange({name, value})
    
  }

  

  const onSubmit = evt => {
    evt.preventDefault()
    const { newQuestion, newTrueAnswer, newFalseAnswer } = form
    // debugger
    postQuiz(newQuestion, newTrueAnswer, newFalseAnswer)
  }

  const{ newQuestion, newTrueAnswer, newFalseAnswer } = form
 const enabledSubmitBtn = 
  newQuestion.trim().length > 0 && newTrueAnswer.trim().length > 0 && newFalseAnswer.trim().length > 0
  


  return (
    <form id="form" onSubmit={onSubmit} name="form">
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" value={form.newQuestion} />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" value={form.newTrueAnswer}/>
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer"value={form.newFalseAnswer} />
      <button id="submitNewQuizBtn" disabled={!enabledSubmitBtn}>Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)
