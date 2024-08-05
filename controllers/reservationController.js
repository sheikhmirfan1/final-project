import ReservationModel from "../models/reservationModel.js";


const createReservation = async (req, res) => {

    const { name, email, phone, date, people } = req.body;
    try {
      const newReservation = await ReservationModel.create({
        name,
        email,
        phone,
        date,
        people,
      
      });
      return res.status(201).json(newReservation);
    } catch (err) {
      console.log("server error 🔴", err);
       return res.status(500).json({ message: "No reservation found" });
    }
} 

const getReservation = async (req, res) => {
    try {
      const reservation = await ReservationModel.find();
      if (reservation.length < 1) {
        return res.status(500).json({ message: "No reservation found" });
      }
      res.status(200).json(reservation);

    } catch (err) {
      console.log("server error 🔴", err);
      return res.status(500).json({ message: "No reservation found" });
    }
    }




export { getReservation, createReservation };
