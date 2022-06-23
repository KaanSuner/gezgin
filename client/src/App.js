import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Travel from "./pages/home/travel/travel.jsx";
import Accomodation from "./pages/home/accommodation/acc.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Profile from "./pages/profile/Profile.jsx";
import UpdateProfile from "./pages/profile/UpdateProfile/UpdateProfile.jsx";
import TravelOrAcc from "./pages/travelOrAcc/TravelOrAcc.jsx";
import { AuthContext } from "./context/AuthContext.js";
import { useContext } from "react";
import Forgot from "./pages/login/ForgotPassword/ForgotPassword.jsx";
import ShareAcc from "./pages/profile/Share/ShareAcc/ShareAcc.jsx";
import ShareTravel from "./pages/profile/Share/ShareTravel/ShareTravel.jsx";
import TravelDetail from "./pages/offerDetails/travel/travelDetail.jsx";
import AccDetail from "./pages/offerDetails/accomodation/accDetail.jsx";
import MyAccRsv from "./pages/profile/MyReservations/accomodation/myAccReservations.jsx";
import MyTravelRsv from "./pages/profile/MyReservations/travel/myTravelReservations.jsx";
import MyAccOffers from "./pages/profile/myOffers/accomodation/myOffersAcc.jsx";
import MyTravelOffers from "./pages/profile/myOffers/travel/myOffersTravel.jsx";
import Activation from "./pages/activation/activation.jsx";
import ResetPassword from "./pages/login/resetPassword/resetPassword.jsx";

function App() {
  const { user} = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={user?<TravelOrAcc />:<Login />}></Route>
        <Route exact path="/accomodation" element={user?<Accomodation />:<Login />}></Route>
        <Route exact path="/travel" element={user?<Travel/>:<Login />}></Route>
        <Route exact path="/login" element={user? <Navigate to="/"/> :<Login />}></Route>
        <Route exact path="/Profile" element={user?<Profile />:<Login />}></Route>
        <Route exact path="/Register" element={user? <Navigate to="/"/> :<Register />}></Route>
        <Route exact path="/UpdateProfile" element={user?<UpdateProfile />:<Login />}></Route>
        <Route exact path="login/forgotPassword" element={<Forgot/>}></Route>
        <Route exact path="/forgotPassword" element={<Forgot/>}></Route>
        <Route exact path="/shareAcc" element={user?<ShareAcc/>:<Login/>}></Route>
        <Route exact path="/shareTravel" element={user?<ShareTravel/>:<Login/>}></Route>
        <Route exact path="/travel/:id" element={user?<TravelDetail/>:<Login/>}></Route>
        <Route exact path="/accomodation/:id" element={user?<AccDetail/>:<Login/>}></Route>
        <Route exact path="/Profile/myAccRsv" element={user?<MyAccRsv/>:<Login/>}></Route>
        <Route exact path="/Profile/myTravelRsv" element={user?<MyTravelRsv/>:<Login/>}></Route>
        <Route exact path="/Profile/myAccOffers" element={user?<MyAccOffers/>:<Login/>}></Route>
        <Route exact path="/Profile/myTravelOffers" element={user?<MyTravelOffers/>:<Login/>}></Route>
        <Route exact path="/api/auth/reset-password/:token" element={<ResetPassword/>}></Route>
        <Route exact path="/api/auth/activation/:activation_token" element={<Activation/>}></Route>
      </Routes>
  </BrowserRouter>
  );
}
export default App;
