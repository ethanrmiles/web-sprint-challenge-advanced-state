import React, {useEffect, useState} from 'react'
import * as actionCreators from '../state/action-creators'
import { connect } from 'react-redux'

export  function Quiz(props) {
  const [render, setRender] = useState(false)
  const {
    fetchQuiz,
    quiz,
    selectAnswer,
    selectedAnswer,
    form,
    infoMessage,
    postAnswer
  } = props
  
  
  useEffect(() => {
    fetchQuiz()
  }, [render])

  const getAnswerId = (index) =>{
   const id =   props?.quiz?.answers[index].answer_id
    selectAnswer(id)
  }

  const getQuizId = () => {
    const quizId =  props?.quiz?.quiz_id
    const answerId = selectedAnswer
    // debugger
    postAnswer(quizId, answerId)
  }




  const enabledSubmitBtn = selectedAnswer
  
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
                <button onClick={()=>getAnswerId(0)}>
                  {props?.quiz?.answers[0].answer_id === selectedAnswer ? 'SELECTED' : 'Select'}
                </button>
                
              </div>

              <div className={`answer${props?.quiz?.answers[1].answer_id === selectedAnswer ? ' selected' : ''}`}>
              {props?.quiz?.answers[1].text}
                <button onClick={()=>getAnswerId(1)}>
                {props?.quiz?.answers[1].answer_id === selectedAnswer ? 'SELECTED' : 'Select'}
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" disabled={!enabledSubmitBtn} onClick={getQuizId}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

export default connect(st => st, actionCreators)(Quiz)