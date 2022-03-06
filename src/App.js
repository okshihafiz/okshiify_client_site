import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";


function App() {
  return (
    <div>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/home" element={<Home/>} />
         <Route path="/login" element={<Login/>} />
         <Route path="/register" element={<Register/>} />
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
