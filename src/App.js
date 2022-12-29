import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LogIn/>}/>
        <Route path="/signup" element={<SignUp/>}/> 
      </Routes>
    </div>
  );
}

export default App;
