import "./UpdateProfile.css";
import Navbar from "../../../components/navbar/navbar.jsx";
import avatar from "./avatar.jpg";
import React from "react";
import { Link } from "react-router-dom";

export default function UpdateProfile(){
    return(
        <>
        <Navbar type="updateProfile"/>
        <div className="updateProfile">
            <form action="" method="post">
                <img src={avatar} alt="" />
                <div className="flex">
                    <div className="inputBox">
                        <span>Kullanıcı Adı :</span>
                        <input type="text"  name="update_name" className="box" />
                        <span>Email adres :</span>
                        <input type="email"  name="update_email" className="box" />
                        <span>Resmi güncelle :</span>
                        <input type="file"  name="update_image" accept="image/jpg, image/jpeg, image/png" className="box" />
                    </div>
                    <div className="inputBox">
                        <input type="hidden" name="oldPass"/>
                        <span>Eski Parola: </span>
                        <input type="password" name="updatePass"  placeholder="enter previous password" className="box"/>
                        <span>Yeni Parola: </span>
                        <input type="password" name="newPass"  placeholder="enter new password" className="box"/>
                        <span>Parolayı Doğrula :</span>
                        <input type="password" name="confirm_pass" placeholder="confirm new password" classclassName="box"></input>
                    </div>
                </div>
                <input type="submit" value="update profile" name="update_profile" className="btn" />
                <li className="btn delete-btn"><Link to={"../Profile"}>Geri Dön</Link></li>
            </form>
        </div>
        </>
    )
}