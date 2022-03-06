import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import Shop from "./Pages/Shop/Shop";



function App() {
  return (
    <div>
     <BrowserRouter>
     
       <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/home" element={<Home/>} />
         <Route path="/login" element={<Login/>} />
         <Route path="/register" element={<Register/>} />
         <Route path="/about" element={<About/>} />
         <Route path="/contact" element={<Contact/>} />
         <Route path="/shop" element={<Shop/>} />
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
