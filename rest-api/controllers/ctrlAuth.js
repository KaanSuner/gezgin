import User from "../models/User.js";
import bcrypt from "bcrypt";

export const register = async (req, res, next) => {
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
      pic: req.body.pic,
    });

    //save user and respond
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(createError(404), "User not Found!");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) return next(400, "Wrong Password or Email");

    const{password,isAdmin,...otherdetails}=user._doc;
    res.status(200).json({...otherdetails});

    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};
