import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import WelcomeCar from "./pages/home/car/welcome/WelcomeCar.jsx";
import WelcomeHouse from "./pages/home/house/welcome/WelcomeHouse.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import UpdateProfile from "./pages/UpdateProfile/UpdateProfile.jsx";
import TravelOrAccomodation from "./pages/TravelOrAccomodation/TravelOrAccomodation.jsx";
import { AuthContext } from "./context/AuthContext.js";
import { useContext } from "react";
import Forgot from "./pages/ForgotPassword/ForgotPassword.jsx"

function App() {
  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={user?<TravelOrAccomodation />:<Login />}></Route>
        <Route path="/accomodation" element={user?<WelcomeHouse />:<Login />}></Route>
        <Route path="/travel" element={user?<WelcomeCar />:<Login />}></Route>
        <Route path="/login" element={user? <Navigate to="/"/> :<Login />}></Route>
        <Route path="/Profile" element={user?<Profile />:<Login />}></Route>
        <Route path="/Register" element={user? <Navigate to="/"/> :<Register />}></Route>
        <Route path="/UpdateProfile" element={user?<UpdateProfile />:<Login />}></Route>
        <Route path="login/forgotPassword" element={<Forgot/>}></Route>
        <Route path="/forgotPassword" element={<Forgot/>}></Route>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
