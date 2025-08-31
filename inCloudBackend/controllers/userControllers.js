import User from "../models/userSchema.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const newUser = new User({ email, password });
    // empty fileds check
    if ( !email || !password) {
      return res.status(400).json({ message: "Kindly fill all the details" });
    }
    // existing user check
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already existed with this email" });
    }
    // hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    newUser.password = hashedPassword;
    // sabing ser
    await newUser.save();
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (err) {
    res.status(500).json({ message: "Error in creating user", error: err });
  }
  console.log(req.body);
};
