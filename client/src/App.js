import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Travel from "./pages/home/travel/travel.jsx";
import Accomodation from "./pages/home/accommodation/acc.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Profile from "./pages/profile/Profile.jsx";
import UpdateProfile from "./pages/profile/UpdateProfile/UpdateProfile.jsx";
import TravelOrAcc from "./pages/travelOrAcc/TravelOrAcc.jsx";
import { AuthContext } from "./context/AuthContext.js";
import { useContext } from "react";
import Forgot from "./pages/login/ForgotPassword/ForgotPassword.jsx"
import ShareAcc from "./pages/profile/ShareAcc/ShareAcc.jsx"
import ShareTravel from "./pages/profile/ShareTravel/ShareTravel.jsx"
import SelectTravel from "./pages/home/travel/SelectTravel/SelectTravel.jsx"
import MyTravels from "./pages/profile/MyTravels/MyTravels.jsx"

function App() {
  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={user?<TravelOrAcc />:<Login />}></Route>
        <Route path="/accomodation" element={user?<Accomodation />:<Login />}></Route>
        <Route path="/travel" element={user?<Travel/>:<Login />}></Route>
        <Route path="/login" element={user? <Navigate to="/"/> :<Login />}></Route>
        <Route path="/Profile" element={user?<Profile />:<Login />}></Route>
        <Route path="/Register" element={user? <Navigate to="/"/> :<Register />}></Route>
        <Route path="/UpdateProfile" element={user?<UpdateProfile />:<Login />}></Route>
        <Route path="login/forgotPassword" element={<Forgot/>}></Route>
        <Route path="/forgotPassword" element={<Forgot/>}></Route>
        <Route path="/shareAcc" element={user?<ShareAcc/>:<Login/>}></Route>
        <Route path="/shareTravel" element={user?<ShareTravel/>:<Login/>}></Route>
        <Route path="/SelectTravel" element={<SelectTravel/>}></Route>
        <Route path="/MyTravel" element={<MyTravels/>}></Route>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
