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
console.log(props)

const moveClockwiseHandler = () => {
   moveClockwise()
}

const moveCounterClockwiseHandler = () => {
  moveCounterClockwise()
}


  return (
    <div id="wrapper">
      <div id="wheel">
        <div className="cog active" style={{ "--i": 0 }}>B</div>
        <div className="cog" style={{ "--i": 1 }}></div>
        <div className="cog" style={{ "--i": 2 }}></div>
        <div className="cog" style={{ "--i": 3 }}></div>
        <div className="cog" style={{ "--i": 4 }}></div>
        <div className="cog" style={{ "--i": 5 }}></div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
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
