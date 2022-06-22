import "./resetPassword.css";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();
  
  const handleClick=()=>{
    navigate("/login");
  }


  return (
    <div className="resetPassword">
      <div className="resetPasswordWrapper">
        <div className="resetPasswordBox">
          <h5 className="string">
            Yeni parolanızı giriniz.
          </h5>
          <input type="password" className="resetInput" placeholder="Yeni Parola" />
          <br />
          <button className="forgotButton" onClick={handleClick}>Şifreyi kaydet.</button>
        </div>
      </div>
    </div>
  );
}