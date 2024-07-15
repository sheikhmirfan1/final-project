import UserModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  const { name, email, password, location } = req.body;

  try {
    if (!name || !email || !password || !location) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const emailVerification = await UserModel.findOne({ email });

    if (emailVerification) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSaltSync(10);

    const hashesPassword = bcrypt.hashSync(password);
    console.log(hashesPassword);

    const user = await new UserModel({
      name,
      email,
      password: hashesPassword,
      location,
    });

    await user.save();

    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log("server error 🔴", error);
    res.status(500).json({ error: `${error.message} 🔴` });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "invalid Email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "invalid Email or password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "20min",
    });

    res.json({ token })

    
  } catch (error) {
    console.log("server error 🔴", error);
    res.status(500).json({ error: `${error.message} 🔴` });
  }
};

export { registerUser, loginUser };
