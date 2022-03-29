import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {
console.log('form: ',props)
const {
  form,
  inputChange,
  postQuiz
  } = props
  const onChange = evt => {
    const value = evt.target.value
    const name = evt.target.id
    inputChange({name, value})
  }

  const onSubmit = evt => {
    evt.preventDefault()
    const question_text = form.newQuestion
    
    const false_answer_text = form.newFalseAnswer
    
    const true_answer_text = form.newTrueAnswer
    
    postQuiz({ false_answer_text, question_text, true_answer_text })
    
    
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
