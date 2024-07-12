import UserModel from "../models/userModel.js";

const registerUser = async (req, res) => {
  console.log(req.body);
  try {
  } catch (error) {
    console.log("server error 🔴", error);
    res.status(500).json({ error: `${error.message} 🔴` });
  }
};

export { registerUser };
