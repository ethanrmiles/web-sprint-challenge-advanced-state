import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'



 function Wheel(props) {
const { 
  //states: 
  wheelReducerState,
  //action creators
  moveClockwise,
  moveCounterClockwise
  } = props




const moveClockwiseHandler = () => {
   moveClockwise()
}

const moveCounterClockwiseHandler = () => {
  moveCounterClockwise()
}


  return (
    <div id="wrapper">
      <div id="wheel">
       <div className={`cog${wheelReducerState === 0 ? ' active' : ''}`} style={{ "--i": 0 }}>{wheelReducerState === 0 ? "B" : ""}</div>
        <div className={`cog${wheelReducerState === 1 ? ' active' : ''}`} style={{ "--i": 1 }}>{wheelReducerState === 1 ? "B" : ""}</div>
        <div className={`cog${wheelReducerState === 2 ? ' active' : ''}`} style={{ "--i": 2 }}>{wheelReducerState === 2 ? "B" : ""}</div>
        <div className={`cog${wheelReducerState === 3 ? ' active' : ''}`} style={{ "--i": 3 }}>{wheelReducerState === 3 ? "B" : ""}</div>
        <div className={`cog${wheelReducerState === 4 ? ' active' : ''}`} style={{ "--i": 4 }}>{wheelReducerState === 4 ? "B" : ""}</div>
        <div className={`cog${wheelReducerState === 5 ? ' active' : ''}`} style={{ "--i": 5 }}>{wheelReducerState === 5 ? "B" : ""}</div>
      </div>

      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={moveCounterClockwiseHandler} >Counter clockwise</button>
        <button id="clockwiseBtn" onClick={moveClockwiseHandler} >Clockwise</button>
      </div>
    </div>
  )
}

const mapState = (state) => {
  return {
    wheelReducerState: state.wheelReducerState
  }
}

export default connect(mapState, actionCreators)(Wheel)
