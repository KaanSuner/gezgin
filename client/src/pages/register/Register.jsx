import "./register.css";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { yellow } from "@mui/material/colors";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Register() {
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const username = useRef();
  const name = useRef();
  const surname = useRef();
  const email = useRef();
  const password = useRef();
  const phone = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    const user = {
      username: username.current.value,
      name: name.current.value,
      surname: surname.current.value,
      email: email.current.value,
      password: password.current.value,
      phone: phone.current.value,
      gender: value,
    };
    try {
      await axios.post("/auth/register", user);
      toast.success("Onay linki gönderildi. Lütfen mailini kontrol et.", {
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
    }
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Gezgin</h3>
          <span className="registerDesc">
            Gezgine hoşgeldin. Gezgin seni ekonomik seyahat ve konaklama hizmeti
            veren diğer kullanıcılar ile tanıştırıyor. Üstelik sende hizmet
            verebilirsin.
          </span>
        </div>
        <div className="registerRight">
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
          <form className="registerBox" onSubmit={handleClick}>
            <input
              placeholder="Kullanıcı Adı"
              required
              ref={username}
              className="registerInput"
            ></input>
            <input
              placeholder="Ad"
              required
              ref={name}
              className="registerInput"
            ></input>
            <input
              placeholder="Soyad"
              required
              ref={surname}
              className="registerInput"
            ></input>
            <input
              placeholder="Email"
              type="email"
              required
              ref={email}
              className="registerInput"
            ></input>
            <input
              placeholder="Parola"
              type="password"
              minLength="6"
              required
              ref={password}
              className="registerInput"
            ></input>
            <input
              placeholder="Telefon"
              required
              ref={phone}
              className="registerInput"
            ></input>
            <div className="gender">
              <span>Cinsiyet</span>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={value}
                  onChange={handleChange}
                  required
                >
                  <FormControlLabel
                    value="female"
                    control={
                      <Radio
                        sx={{
                          color: yellow[700],
                          "&.Mui-checked": {
                            color: yellow[700],
                          },
                        }}
                      />
                    }
                    label="Kadın"
                    checked={value === "female"}
                  />
                  <FormControlLabel
                    value="male"
                    control={
                      <Radio
                        sx={{
                          color: yellow[700],
                          "&.Mui-checked": {
                            color: yellow[700],
                          },
                        }}
                      />
                    }
                    label="Erkek"
                    checked={value === "male"}
                  />
                </RadioGroup>
              </FormControl>
            </div>

            <button className="registerButton" type="submit">
              Kayıt ol
            </button>
            <button
              className="registerLoginButton"
              onClick={() => navigate("/login")}
            >
              Hesabın varsa giriş yap
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
