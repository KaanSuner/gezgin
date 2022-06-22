import { useNavigate, useParams } from "react-router-dom";
import "./activation.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const Activation = () => {
  const { activation_token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // check token
    if (activation_token) {
      const activateUser = async () => {
        try {
          await axios.post("/auth/activation", {
            activation_token,
          });
          toast.success("Aktivasyon başarılı", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } catch (err) {
          console.log(err);
          toast.error(err.response.data.msg, {
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
      activateUser();
    }
  }, [activation_token]);

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="activate">
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
      <p>
        Giriş yapmaya hazırsın 👉🏻 <span onClick={handleClick}>Tıkla</span>
      </p>
    </div>
  );
};

export default Activation;
