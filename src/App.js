import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LogIn/>}/>
        <Route path="/signup" element={<SignUp/>}/> 
        <Route path="/home" element={<Home/>}/> 
      </Routes>
    </div>
  );
}

export default App;
