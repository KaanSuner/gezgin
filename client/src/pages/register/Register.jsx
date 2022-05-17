import "./register.css";
import avatar from "./image.jpg";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Gezgin</h3>
          <span className="loginDesc">
            Gezgine hoşgeldin. Gezgin seni ekonomik seyahat ve konaklama hizmeti
            veren diğer kullanıcılar ile tanıştırıyor. Üstelik sende hizmet
            verebilirsin.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Ad" className="loginInput"></input>
            <input placeholder="Soyad" className="loginInput"></input>
            <input placeholder="Email" className="loginInput"></input>
            <input placeholder="Parola" className="loginInput"></input>
            <input placeholder="Telefon" className="loginInput"></input>
            <span className="loginInput">
              <input className="gender" type="radio" name="male" value="male"/><span className="color">Erkek</span>
              <input className="gender" type="radio" name="female" value="female"/><span className="color">Kadın</span>
            </span>
            {/* <div className="profile-pic-div">
              <img src={avatar} id="photo" alt=""/> 
              <input id="file" type="file" /> 
              <label id="uploadBtn">Choose Photo</label>
            </div> */}
           
              {/* <div className="profile-pic-div">
                <img src={avatar} id="photo" alt="" /> */}
                <input type="file" className=" selectImg loginInput " accept="image/jpg, image/jpeg, image/png"/>
              {/* </div> */}
          
       


            {/* <input type="file" id="file">Choose Photo</input> */}
{/* 

            <h1>Upload Photo Like Facebook Profile DP</h1>

<div class="profile-pic-div">
  <img src="image.jpg" id="photo">
  <input type="file" id="file">
  <label for="file" id="uploadBtn">Choose Photo</label>
</div> */}

            <button className="loginButton">Kayıt ol</button>
            <button className="loginRegister">Hesabına giriş yap</button>
          </div>
        </div>
      </div>
    </div>
  );
}
