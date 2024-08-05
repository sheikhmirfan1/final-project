import { Router } from "express";

import { postReservation, getReservations } from "../controllers/reservationController.js";

const router = Router();

router.route("/reservation").get(getReservations).post(postReservation);

export default reservationRouter;