import { Router } from "express";
import { sendEmail } from "../controllers/mailController.js";


const mailRoute = Router();

mailRoute.post('/send-email', sendEmail);


export default mailRoute;
