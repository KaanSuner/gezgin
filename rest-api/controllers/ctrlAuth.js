import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createToken } from "../helpers/createToken.js";
import { sendEmailRegister, sendEmailReset } from "../helpers/sendMail.js";

/* export const register = async (req, res, next) => {
  
    try {
    //generate a new hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = new User({
      name: req.body.name,
      username: req.body.username,
      surname: req.body.surname,
      email: req.body.email,
      password: hashedPassword,
      gender: req.body.gender,
      phone: req.body.phone,
    });

    //save user and respond
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({msg:err.message})
  }
}; */

/* export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(createError(404), "User not Found!");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) return next(400, "Wrong Password or Email");
    const token = jwt.sign({ id: user._id }, process.env.JWT);

    const { password, ...otherdetails } = user._doc;
    res
      .cookie("accessToken", token, { httpOnly: true })
      .status(200)
      .json({ ...otherdetails });

    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};
 */

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(createError(404), "User not Found!");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) return next(400, "Wrong Password or Email");
    const rf_token = createToken.refresh({ id: user._id });

    res.cookie("_apprftoken", rf_token, {
      httpOnly: true,
      path: "/auth/access",
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const register = async (req, res, next) => {
  try {
    //generate a new hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = {
      name: req.body.name,
      username: req.body.username,
      surname: req.body.surname,
      email: req.body.email,
      password: hashedPassword,
      gender: req.body.gender,
      phone: req.body.phone,
    };

    const user = await User.findOne({ email: newUser.email });
    if (user)
      return res
        .status(400)
        .json({ msg: "This email is already registered in our system." });

    //create activation token
    const activation_token = createToken.activation(newUser);
    //send email
    const url = `http://localhost:3000/api/auth/activation/${activation_token}`;
    sendEmailRegister(newUser.email, url, "Mail doğrulama");

    res.status(200).json("PLEASE CHECK YOUR EMAIL");
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const activation = async (req, res, next) => {
  try {
    // get token
    const { activation_token } = req.body;

    // verify token
    const user = jwt.verify(activation_token, process.env.ACTIVATION_TOKEN);
    const { name, email, password, phone, username, surname, gender } = user;

    // check user
    const check = await User.findOne({ email });
    if (check)
      return res.status(400).json({ msg: "This email is already registered." });

    // add user
    const newUser = new User({
      name,
      surname,
      username,
      email,
      password,
      phone,
      gender,
    });
    await newUser.save();

    // activation success
    res
      .status(200)
      .json({ msg: "Your account has been activated, you can now sign in." });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const access = async (req, res, next) => {
  try {
    // rf token
    const rf_token = req.cookies._apprftoken;
    if (!rf_token) return res.status(400).json({ msg: "Please sign in." });

    // validate
    jwt.verify(rf_token, process.env.REFRESH_TOKEN, (err, user) => {
      if (err) return res.status(400).json({ msg: "Please sign in again." });
      // create access token
      const ac_token = createToken.access({ id: user.id });
      // access success
      return res.status(200).json({ ac_token });
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

export const forgot = async (req, res, next) => {
  try {
    // get email
    const { email } = req.body;
    console.log(email);

    // check email
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ msg: "This email is not registered." });

    // create ac token
    const ac_token = createToken.access({ id: user.id });

    // send email
    const url = `http://localhost:3000/api/auth/reset-password/${ac_token}`;
    const name = user.name;
    console.log(name);
    sendEmailReset(email, url, "Parola Sıfırlama", name);

    // success
    res
      .status(200)
      .json({ msg: "Parolanı sıfırlaman için mailini kontrol et" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const reset = async (req, res, next) => {
  try {
    // get password
    const { password} = req.body;

    // hash password
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    // update password
    await User.findOneAndUpdate(
      { _id: req.user.id },
      { password: hashPassword }
    );

    // reset success
    res.status(200).json({ msg: "Password was updated successfully." });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
export const reset2 = async (req, res, next) => {
  try {
    // get password
    const { password,user } = req.body;

    // hash password
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    // update password
    await User.findOneAndUpdate(
      { _id: user._id },
      { password: hashPassword }
    );

    // reset success
    res.status(200).json({ msg: "Password was updated successfully." });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const info = async (req, res) => {
  try {
    // get info -password
    const user = await User.findById({_id:req.params.id});
    // return user
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const update = async (req, res) => {
  try {
    // get info
    const { name, avatar, surname, phone, username, email,id} =
      req.body;
     
    // update
    await User.findOneAndUpdate(
      { _id: id },
      { name, avatar, surname, phone,  username, email }
    );
    // success
    res.status(200).json({ msg: "User was updated successfully." });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const logout = async (req, res) => {
  try {
    // clear cookie
    res.clearCookie("_apprftoken", { path: "/auth/access" });
    // success
    return res.status(200).json({ msg: "Signout success." });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
