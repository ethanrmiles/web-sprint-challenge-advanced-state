// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import { INPUT_CHANGE, MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_QUIZ_INTO_STATE } from './action-types'

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
  return state
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  return state
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
    switch(action.type){
      case SET_QUIZ_INTO_STATE: 
      return [...state, action.payload]
     case INPUT_CHANGE:
        return { ...state, [action.payload.name]: action.payload.value }
      default: 
        return state
    }
}

export default combineReducers({ wheelReducerState, quiz, selectedAnswer, infoMessage, form })
