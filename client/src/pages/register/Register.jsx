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
            <input type="file" className=" selectImg loginInput " accept="image/jpg, image/jpeg, image/png"/>
            <button className="loginButton">Kayıt ol</button>
            <button className="loginRegister">Hesabına giriş yap</button>
          </div>
        </div>
      </div>
    </div>
  );
}
