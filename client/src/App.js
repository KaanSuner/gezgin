import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomeCar from "./pages/home/car/welcome/WelcomeCar.js";
import WelcomeHouse from "./pages/home/house/welcome/WelcomeHouse.jsx";
import Login from "./pages/login/Login.jsx";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/accomodation" element={<WelcomeHouse/>}></Route>
        <Route path="/travel" element={<WelcomeCar/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
