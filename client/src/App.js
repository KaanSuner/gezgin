import { BrowserRouter, Routes, Route} from "react-router-dom";
import WelcomeCar from "./pages/home/car/welcome/WelcomeCar.jsx";
import WelcomeHouse from "./pages/home/house/welcome/WelcomeHouse.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import UpdateProfile from "./pages/UpdateProfile/UpdateProfile.jsx";
import TravelOrAccomodation from "./pages/TravelOrAccomodation/TravelOrAccomodation.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/accomodation" element={<WelcomeHouse />}></Route>
          <Route path="/travel" element={<WelcomeCar />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/UpdateProfile" element={<UpdateProfile />}></Route>
          <Route path="/TravelOrAccomodation" element={<TravelOrAccomodation/>}></Route>
          <Route path="/" element={<WelcomeCar />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
