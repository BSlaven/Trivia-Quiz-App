// import { useEffect } from "react";
import { useNavigate } from "react-router"; 
import { setSelectedNumberOfQuestions } from "../redux/slices/quizSlice";
import { useDispatch } from "react-redux/es/exports"; 
import data from '../data.json'

const Quiz = () => {

  console.log(data)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const routeBackHome = () => {
    navigate('/');
    dispatch(setSelectedNumberOfQuestions({ number: 10 }));
  }
  
  return (
    <main className="main">
      <div className="question-container">
        <h3 className="question-text">Ovo je prvo pitanje, pa tako još jednom?</h3>
        <div className="answers-container">
          <p className="answer">Odgovor 1</p>
          <p className="answer correct">Odgovor 2</p>
          <p className="answer wrong">Odgovor 3</p>
          <p className="answer">Odgovor 4</p>
        </div>
      </div>
      <button className="quit-btn" onClick={routeBackHome}>quit</button>
    </main>
  )
}

export default Quiz