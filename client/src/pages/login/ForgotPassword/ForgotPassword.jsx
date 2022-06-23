import "./ForgotPassword.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useRef, useState } from "react";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const email = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email: email.current.value,
    };

    try {
      await axios.post("/auth/forgot-password", user);
      return toast.success(
        "Sıfırlama linki gönderildi. Lütfen mailini kontrol et.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    } catch (err) {
      toast.error("Hata oluştu. Lütfen tekrar deneyin.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <div className="forgotPassword">
      <div className="forgotPasswordWrapper">
        <>
          <ToastContainer />
          <form className="forgotPasswordBox" onSubmit={handleSubmit}>
            <h5 className="string">
              Şifre sıfırlama için E-mail adresinizi giriniz
            </h5>
            <input
              type="email"
              className="forgotInput"
              placeholder="E-mail"
              ref={email}
              required
            />
            <br />
            <button className="forgotButton" type="submit">
              Şifreyi sıfırla
            </button>
            <h6 className="turnToLogin" onClick={() => navigate("/login")}>
              Geri Dön
            </h6>
          </form>
        </>
      </div>
    </div>
  );
}
