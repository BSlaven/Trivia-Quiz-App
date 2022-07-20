import { useNavigate } from "react-router"; 

const Quiz = () => {

  const navigate = useNavigate();

  const routeBackHome = () => {
    navigate('/');
  }
  
  return (
    <>
      <div>Quiz component</div>
      <button onClick={routeBackHome}>back to home</button>
    </>
  )
}

export default Quiz