import reservation from "../models/reservationModel.js";

// Get all reservations
const getReservation = async (req, res) => {
    try {
        const reservation = await reservation.find();
        res.json(reservation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }

// Post reservation
const postReservation = async (req, res) => {
    const newReservation = new reservation(req.body);
    try {
        const reservation = await newReservation.save();
        res.status(201).json(reservation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export { getReservation, postReservation };
