import "./ForgotPassword.css";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();
  
  const handleClick=()=>{
    
  }
  const handleClick2 = () => navigate("/login");



  return (
    <div className="forgotPassword">
      <div className="forgotPasswordWrapper">
        <div className="forgotPasswordBox">
          <h5 className="string">
            Şifre sıfırlama için E-mail adresinizi giriniz
          </h5>
          <input type="email" className="forgotInput" placeholder="E-mail" />
          <br />
          <button className="forgotButton" onClick={handleClick}>Şifreyi sıfırla</button>
          <h6 className="turnToLogin" onClick={handleClick2}>
            Geri Dön
          </h6>
        </div>
      </div>
    </div>
  );
}
