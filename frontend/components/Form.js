import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import { useEffect } from 'react'

export function Form(props) {
const {
  form,
  inputChange,
  postQuiz,
  fetchQuiz
  } = props
  console.log(form)
 
  const onChange = evt => {
    const value = evt.target.value
    const name = evt.target.id
    inputChange({name, value})
  }

  const onSubmit = evt => {
    evt.preventDefault()
    const { newQuestion, newTrueAnswer, newFalseAnswer } = form
    console.log(newQuestion, newTrueAnswer, newFalseAnswer )
    // debugger
    postQuiz(newQuestion, newTrueAnswer, newFalseAnswer)
    
    
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)
