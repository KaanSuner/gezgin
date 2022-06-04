import "./UpdateProfile.css";
import Navbar from "../../components/navbar/Navbar";
import avatar from "./avatar.jpg";
import React from "react";
import { Link } from "react-router-dom";

export default function UpdateProfile(){
    return(
        <>
        <Navbar/>
        <div className="updateProfile">
            <form action="" method="post">
                <img src={avatar} alt="" />
                <div className="flex">
                    <div className="inputBox">
                        <span>username :</span>
                        <input type="text"  name="update_name" class="box" />
                        <span>your email :</span>
                        <input type="email"  name="update_email" class="box" />
                        <span>update your pic :</span>
                        <input type="file"  name="update_image" accept="image/jpg, image/jpeg, image/png" class="box" />
                    </div>
                    <div className="inputBox">
                        <input type="hidden" name="oldPass"/>
                        <span>Eski Şifre: </span>
                        <input type="password" name="updatePass"  placeholder="enter previous password" class="box"/>
                        <span>Yeni Şifre: </span>
                        <input type="password" name="newPass"  placeholder="enter new password" class="box"/>
                        <span>confirm password :</span>
                        <input type="password" name="confirm_pass" placeholder="confirm new password" class="box"></input>
                    </div>
                </div>
                <input type="submit" value="update profile" name="update_profile" class="btn" />
                <li className="btn delete-btn"><Link to={"../Profile"}>Geri Dön</Link></li>
            </form>
        </div>
        </>
    )
}