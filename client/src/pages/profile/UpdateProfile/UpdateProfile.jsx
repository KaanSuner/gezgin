import "./UpdateProfile.css";
import Navbar from "../../../components/navbar/navbar.jsx";
import avatar from "./avatar.jpg";
import React from "react";
import Avatar from "../../../components/avatar/avatar.jsx";

export default function UpdateProfile() {
  return (
    <>
      <Navbar type="updateProfile" />
      <div className="updateProfileContainer">
        <div className="updateProfileWrapper">
          <div className="updateProfileLeft">
            <h4 className="updateProfileTitle">Profilini Güncelle</h4>
            <input type="text" className="box" placeholder="İsim" />

            <input type="text" className="box" placeholder="Soyisim" />

            <input type="text" className="box" placeholder="Kullanıcı Adı" />

            <input type="email" className="box" placeholder="Email" />

            <input type="password" className="box" placeholder="Parola" />

            <input type="text" className="box" placeholder="Telefon" />
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
