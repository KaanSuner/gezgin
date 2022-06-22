import "./Profile.css";
import Navbar from "../../components/navbar/navbar.jsx";
import Footer from "../../components/footer/footer";
import React from "react";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Avatar from "../../components/avatar/avatar.jsx";

export default function Profile() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <>
      <Navbar type="profile" />
      <div className="profileContainer">
        <div className="profileWrapper">
          <div className="profileLeft">
          <div className="profile_avatar">

          <Avatar/>
          </div>
            <button
              className="button"
              onClick={() => navigate("/UpdateProfile")}
            >
              Profili düzenle
            </button>
            <div className="makeOfferDropDown">
              <button className="button">Teklif Oluştur</button>
              <div className="makeOfferDropDownItems">
                <button
                  className="button"
                  onClick={() => navigate("/shareTravel")}
                >
                  Seyahat
                </button>

                <button
                  className="button"
                  onClick={() => navigate("/shareAcc")}
                >
                  Konaklama
                </button>
              </div>
            </div>
            <div className="myReservationsDropDown">
              <button className="button">Rezervasyonlarım</button>
              <div className="myReservationsDropDownItems">
                <button
                  className="button"
                  onClick={() => navigate("/Profile/myTravelRsv")}
                >
                  Seyahat
                </button>
                <button
                  className="button"
                  onClick={() => navigate("/Profile/myAccRsv")}
                >
                  Konaklama
                </button>
              </div>
            </div>
            <div className="myOffersDropDown">
              <button className="button">Tekliflerim</button>
              <div className="myOffersDropDownItems">
                <button
                  className="button"
                  onClick={() => navigate("/Profile/myTravelOffers")}
                >
                  Seyahat
                </button>
                <button
                  className="button"
                  onClick={() => navigate("/Profile/myAccOffers")}
                >
                  Konaklama
                </button>
              </div>
            </div>
          </div>
          <div className="profileRight">
            <h2 className="text">
              Merhaba {user.name}. Burada profilini yönetebilir ve mevcut
              tekliflerini gözden geçirebilirsin.
            </h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

// <div class="update-profile">
//    <form action="" method="post" enctype="multipart/form-data">
//       <?php
//          if($fetch['image'] == ''){
//             echo '<img src="images/default-avatar.png">';
//          }else{
//             echo '<img src="uploaded_img/'.$fetch['image'].'">';
//          }
//          if(isset($message)){
//             foreach($message as $message){
//                echo '<div class="message">'.$message.'</div>';
//             }
//          }
//       ?>
//       <div class="flex">
//          <div class="inputBox">
//             <span>username :</span>
//             <input type="text" name="update_name" value="<?php echo $fetch['name']; ?>" class="box">
//             <span>your email :</span>
//             <input type="email" name="update_email" value="<?php echo $fetch['email']; ?>" class="box">
//             <span>update your pic :</span>
//             <input type="file" name="update_image" accept="image/jpg, image/jpeg, image/png" class="box">
//          </div>
//          <div class="inputBox">
//             <input type="hidden" name="old_pass" value="<?php echo $fetch['password']; ?>">
//             <span>old password :</span>
//             <input type="password" name="update_pass" placeholder="enter previous password" class="box">
//             <span>new password :</span>
//             <input type="password" name="new_pass" placeholder="enter new password" class="box">
//             <span>confirm password :</span>
//             <input type="password" name="confirm_pass" placeholder="confirm new password" class="box">
//          </div>
//       </div>
//       <input type="submit" value="update profile" name="update_profile" class="btn">
//       <a href="home.php" class="delete-btn">go back</a>
//    </form>

// </div>

// </body>
// </html>
