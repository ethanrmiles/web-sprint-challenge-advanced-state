// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER, SET_INFO_MESSAGE, INPUT_CHANGE, RESET_FORM } from './action-types'

const initialWheelState = 0
function wheelReducerState(state = initialWheelState, action) {
  switch(action.type){
    case MOVE_CLOCKWISE: 
    if (state < 5){
      return state + 1
    } else {
      return 0
    }
    case MOVE_COUNTERCLOCKWISE:
      if(state === 0){
        return 5
      }else {
        return state - 1
      }
      
    default: 
    return state
  }
}

const initialQuizState = null
function quiz(state = initialQuizState, action) {
  switch(action.type){
    case SET_QUIZ_INTO_STATE: 
      return action.payload
    default:
        return state
  }
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  
  switch(action.type){
    case SET_SELECTED_ANSWER:
        return state = action.payload
      default: 
        return state
  }
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  switch(action.type){
    case SET_INFO_MESSAGE:
      return action.payload
    default: 
      return state
  }
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
    switch(action.type){
      case RESET_FORM:
        return {
          newQuestion: '',
          newTrueAnswer: '',
          newFalseAnswer: '',
        }
     case INPUT_CHANGE:
        return { ...state, [action.payload.name]: action.payload.value }
      default: 
        return state
    }
}

export default combineReducers({ wheelReducerState, quiz, selectedAnswer, infoMessage, form })
