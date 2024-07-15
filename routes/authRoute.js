import { Router } from "express";
import { registerUser,loginUser } from "../controllers/authController.js"

const authRoute = Router();

authRoute.post("/register", registerUser);
authRoute.post("/login", loginUser);

export default authRoute;
