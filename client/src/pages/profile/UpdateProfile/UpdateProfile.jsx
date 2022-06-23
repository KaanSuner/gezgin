import "./UpdateProfile.css";
import Navbar from "../../../components/navbar/navbar.jsx";
import React, { useContext, useState } from "react";
import Avatar from "../../../components/avatar/avatar.jsx";
import { AuthContext } from "../../../context/AuthContext";
import { useRef } from "react";
import { AiFillCamera } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const initialState = {
  name: "",
  password: "",
  email: "",
  phone: "",
  username: "",
  avatar: "",
  surname: "",
};

export default function UpdateProfile() {
  const { user, dispatch } = useContext(AuthContext);
  const inputFile = useRef(null);
  const [avatar, setAvatar] = useState(false);
  const [data, setData] = useState(initialState);
  const { name, surname, username, phone, email, password ,_id} = data;

  const handleInput = () => {
    inputFile.current.click();
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const updateInfo = async () => {
    const body={
      name: name ? name : user.name,
      avatar: avatar ? avatar : user.avatar,
      surname: surname ? surname : user.surname,
      username: username ? username : user.username,
      phone: phone ? phone : user.phone,
      email: email ? email : user.email,
      id:user._id,
    }

    try {
      const res = await axios.patch("/auth/update-info", body);

      const updatedUser = await axios.get(`/auth/user-info/${user._id}`);
      dispatch({ type: "LOGIN_SUCCESS", payload: updatedUser.data }); 
      return toast.success(res.data.msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      toast(err.response.data.msg, {
        className: "toast-failed",
        bodyClassName: "toast-failed",
      });
    }
  };

  const updatePassword = async () => {
    try {
      const res = await axios.post("/auth/reset-password2", { password, user });
      return toast.success(res.data.msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      return toast.error(err.response.data.msg, {
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

  const handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    setData({
      ...data,
      name: "",
      password: "",
      email: "",
      phone: "",
      username: "",
      surname: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name || avatar) {
      updateInfo();
    }
    if (password) {
      updatePassword();
      handleReset();
    }
  };

  const changeAvatar = async (e) => {
    e.preventDefault();
    try {
      // get file
      const file = e.target.files[0];
      let formData = new FormData();
      formData.append("avatar", file);
      // upload to cloudinary
      const res = await axios.post("/upload", formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
        onUploadProgress: (x) => {
          if (x.total < 1024000)
            return toast("Uploading", {
              className: "bg-upload",
              bodyClassName: "bg-upload",
              autoClose: 7000,
            });
        },
      });
      setAvatar(res.data.url);
    } catch (err) {
      toast.error("Fotoğraf yüklenirken hata oluştu.", {
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
    <>
      <Navbar type="updateProfile" />
      <ToastContainer />
      <div className="updateProfileContainer">
        <div className="updateProfileWrapper">
          <form className="updateProfileLeft" onSubmit={handleSubmit}>
            <h4 className="updateProfileTitle">Profilini Güncelle</h4>
            <input
              type="text"
              className="box"
              placeholder={user.name}
              name="name"
              onChange={handleChange}
            />

            <input
              type="text"
              className="box"
              placeholder={user.surname}
              name="surname"
              onChange={handleChange}
            />

            <input
              type="text"
              className="box"
              placeholder={user.username}
              name="username"
              onChange={handleChange}
            />

            <input
              type="email"
              className="box"
              placeholder={user.email}
              name="email"
              onChange={handleChange}
            />

            <input
              type="password"
              className="box"
              placeholder="Parola"
              name="password"
              onChange={handleChange}
            />

            <input
              type="text"
              className="box"
              placeholder={user.phone}
              name="phone"
              onChange={handleChange}
            />
            <button className="savebtn" type="submit">
              Kaydet
            </button>
          </form>
          <div className="updateProfileRight">
            <div className="updateProfile_Avatar" onClick={handleInput}>
              <Avatar avatar={avatar} />
              <AiFillCamera />
            </div>
            <input
              type="file"
              ref={inputFile}
              name="avatar"
              accept="image/jpg, image/jpeg, image/png"
              className="profile_avatar-input"
              onChange={changeAvatar}
            />
          </div>
        </div>
      </div>
    </>
  );
}
