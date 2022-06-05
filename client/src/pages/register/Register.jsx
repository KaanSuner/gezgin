import "./register.css";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

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
  const gender = useRef();
  const history = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    const user = {
      username: username.current.value,
      name: name.current.value,
      surname: surname.current.value,
      email: email.current.value,
      password: password.current.value,
      phone: phone.current.value,
      gender: value
    };
    try {
      await axios.post("/auth/register", user);
      history("/login");
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick2 = () => history("/login");

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
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Kullanıcı Adı"
              required
              ref={username}
              className="loginInput"
            ></input>
            <input
              placeholder="Ad"
              required
              ref={name}
              className="loginInput"
            ></input>
            <input
              placeholder="Soyad"
              required
              ref={surname}
              className="loginInput"
            ></input>
            <input
              placeholder="Email"
              type="email"
              required
              ref={email}
              className="loginInput"
            ></input>
            <input
              placeholder="Parola"
              type="password"
              minLength="6"
              required
              ref={password}
              className="loginInput"
            ></input>
            <input
              placeholder="Telefon"
              required
              ref={phone}
              className="loginInput"
            ></input>
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group">
                Cinsiyetini Seç
              </FormLabel>
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
                  control={<Radio />}
                  label="Kadın"
                  checked={value === "female"}
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Erkek"
                  checked={value === "male"}
                />
              </RadioGroup>
            </FormControl>
            <button className="loginButton" type="submit">
              Kayıt ol
            </button>
            <button className="loginRegisterRegister" onClick={handleClick2}>
              Hesabın varsa giriş yap
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
