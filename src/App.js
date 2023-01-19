import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate to={'/login'}/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/signup" element={<SignUp/>}/> 
        <Route path="/home" element={<Home/>}/> 
        <Route path="*" element={<div>Page not found 404</div>}/>
      </Routes>
    </div>
  );
}

export default App;
