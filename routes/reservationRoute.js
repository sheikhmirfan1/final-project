import { Router } from "express";

import {
  getReservation,
  createReservation,
} from "../controllers/reservationController.js";

const reservationRouter = Router();

reservationRouter.get("/reservation", getReservation);
reservationRouter.post("/reservation", createReservation);

export default reservationRouter;
