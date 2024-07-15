import UserModel from "../models/userModel.js";

const checkAdmin = async (req, res, next) => {
  console.log(req.user);
  try {
    const user = await UserModel.findById(req.user.id);
    if (!user || !user.isAdmin) {
      return res.status(401).json({ message: "Access denied, admin only" });
    }
    next();
  } catch (error) {
    console.log("server error 🔴", error);
    res.status(500).json({ error: `${error.message} 🔴` });
  }
};

export default checkAdmin;
