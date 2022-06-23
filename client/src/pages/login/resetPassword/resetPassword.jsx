import "./resetPassword.css";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useRef } from "react";

export default function ResetPassword() {
  const navigate = useNavigate();
  const password = useRef();
  const { token } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      password: password.current.value,
    };

    try {
      await axios.post("/auth/reset-password", user, {
        headers: { Authorization: token },
      });
      navigate("/");
      return toast.success(
        "Şifreniz başarıyla değiştirildi. Lütfen yeni şifrenizi kullanarak giriş yapınız.",
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
    <div className="resetPassword">
      <div className="resetPasswordWrapper">
        <>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <form className="resetPasswordBox" onSubmit={handleSubmit}>
            <h5 className="string">Yeni parolanızı giriniz.</h5>
            <input
              type="password"
              className="resetInput"
              placeholder="Yeni Parola"
              ref={password}
            />
            <br />
            <button className="forgotButton" type="submit">
              Şifreyi kaydet.
            </button>
          </form>
        </>
      </div>
    </div>
  );
}
