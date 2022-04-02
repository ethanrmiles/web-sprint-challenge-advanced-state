import React, {useEffect} from 'react'
import * as actionCreators from '../state/action-creators'
import { connect } from 'react-redux'

export  function Quiz(props) {
  const {
    fetchQuiz,
    quiz
  } = props
  
  
  useEffect(() => {
    fetchQuiz()
  }, [])



  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>{props?.quiz?.question}</h2>

            <div id="quizAnswers">
              <div className="answer selected">
              {props?.quiz?.answers[0].text}
                <button>
                  SELECTED
                </button>
              </div>

              <div className="answer">
              {props?.quiz?.answers[1].text}
                <button>
                  Select
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

export default connect(st => st, actionCreators)(Quiz)