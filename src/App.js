import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./components/home"
import Login from "./components/login"
import Signup from "./components/signup"
function App() {
  
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/question3" element={<Login/>}/>
        <Route path="/question3/signup" element={<Signup/>}/>
        <Route path="/question3/home" element={<Home/>}/>
      </Routes>
    </Router>
  </div>
  )
}

export default App
