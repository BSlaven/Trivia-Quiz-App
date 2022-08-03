import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Quiz from './components/Quiz';
import Stats from './components/Stats';
import './App.css'

function App() {

  return (
    <Router>
      <div className="app">
        <Routes>          
          <Route path='/' element={<Home />} />
          <Route path='/quiz' element={<Quiz/>} />
          <Route path='/stats' element={<Stats/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
