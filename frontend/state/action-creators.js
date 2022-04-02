// ❗ You don't need to add extra action creators to achieve MVP
import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER, SET_INFO_MESSAGE, INPUT_CHANGE, RESET_FORM } from './action-types'
import axios from 'axios'



export function moveClockwise() {
  //will increment among the circles
  return { type: MOVE_CLOCKWISE }
 }

export function moveCounterClockwise() {
  //will decrement among the circles
  return { type: MOVE_COUNTERCLOCKWISE}
 }

export function selectAnswer() { }

export function setMessage(type) { 
  
}

export function setQuiz() { }

export function inputChange({ name, value }) { 
  return { type: INPUT_CHANGE, payload: { name, value} }
}

export function resetForm() { }

// ❗ Async action creators
export const fetchQuiz = () => dispatch => {
  axios.get('http://localhost:9000/api/quiz/next')
  .then(res => {
    dispatch( { type: SET_QUIZ_INTO_STATE, payload: res.data })
  })


  .catch(err => {
    debugger
  })
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  }

export function postAnswer() {
  return function (dispatch) {
    console.log(props)
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export const postQuiz = (false_answer_text, question_text, true_answer_text) => dispatch => {
    axios.post(' http://localhost:9000/api/quiz/new', {false_answer_text, question_text, true_answer_text})
  .then(res => {
    
  // dispatch( { type: SET_QUIZ_INTO_STATE, payload: res.data })
  dispatch({ type: SET_INFO_MESSAGE, payload: res.statusText })
  dispatch({ type: RESET_FORM })
  }) 
    .catch(err => {
    dispatch({ type: SET_INFO_MESSAGE, payload: err?.response?.data?.message })
    
  })
  
  // On successful POST:
  // - Dispatch the correct message to the the appropriate state
  // - Dispatch the resetting of the form
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
