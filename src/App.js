import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";


function App() {
  return (
    <div>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/home" element={<Home/>} />
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
