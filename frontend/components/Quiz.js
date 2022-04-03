import React, {useEffect} from 'react'
import * as actionCreators from '../state/action-creators'
import { connect } from 'react-redux'

export  function Quiz(props) {
  const {
    fetchQuiz,
    quiz,
    selectAnswer,
    selectedAnswer
  } = props
  
  
  useEffect(() => {
    fetchQuiz()
  }, [])

  const getId = (index) =>{
   const id =   props?.quiz?.answers[index].answer_id
    selectAnswer(id)
  }

  console.log(props?.quiz)

  const enabled = selectedAnswer
  
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>{props?.quiz?.question}</h2>

            <div id="quizAnswers">
              <div className={`answer${props?.quiz?.answers[0].answer_id === selectedAnswer ? ' selected' : ''}`}>
              {props?.quiz?.answers[0].text}
                <button onClick={()=>getId(0)}>
                  {props?.quiz?.answers[0].answer_id === selectedAnswer ? 'Selected' : 'Select'}
                </button>
                
              </div>

              <div className={`answer${props?.quiz?.answers[1].answer_id === selectedAnswer ? ' selected' : ''}`}>
              {props?.quiz?.answers[1].text}
                <button onClick={()=>getId(1)}>
                {props?.quiz?.answers[1].answer_id === selectedAnswer ? 'Selected' : 'Select'}
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" disabled={!enabled}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

export default connect(st => st, actionCreators)(Quiz)