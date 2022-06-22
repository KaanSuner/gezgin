import "./UpdateProfile.css";
import Navbar from "../../../components/navbar/navbar.jsx";
import React, { useContext } from "react";
import Avatar from "../../../components/avatar/avatar.jsx";
import { AuthContext } from "../../../context/AuthContext";

export default function UpdateProfile() {
  const {user} = useContext(AuthContext);
  return (
    <>
      <Navbar type="updateProfile" />
      <div className="updateProfileContainer">
        <div className="updateProfileWrapper">
          <div className="updateProfileLeft">
            <h4 className="updateProfileTitle">Profilini Güncelle</h4>
            <input type="text" className="box" placeholder={user.name} />

            <input type="text" className="box" placeholder={user.surname} />

            <input type="text" className="box" placeholder={user.username} />

            <input type="email" className="box" placeholder={user.email}/>

            <input type="password" className="box" placeholder="Parola" />

            <input type="text" className="box" placeholder={user.phone} />
            <input
              type="file"
              name="update_image"
              accept="image/jpg, image/jpeg, image/png"
              className="boxImg"
              placeholder="Resmi Güncelle"
            />
          </div>
          <div className="updateProfileRight">
            <div className="updateProfile_Avatar">
              <Avatar/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
