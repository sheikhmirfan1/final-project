import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import productRoute from "./routes/productRoute.js";
import orderRoute from "./routes/orderRoute.js";
import reservationRouter from "./routes/reservationRoute.js";
import authRoute from "./routes/authRoute.js";
import cors from "cors";
import mailRoute from "./routes/mailRoute.js";
import cartRouter from "./routes/cartRoute.js";

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

const app = express();


const corsOptions = {
  exposedHeaders: ["Content-Range"],
};


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", productRoute, orderRoute, authRoute,mailRoute,cartRouter);
app.use("/api", reservationRouter);


mongoose
  .connect(MONGO_URI)
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port ${PORT} 🟢`))
  )
  .catch((err) =>
    console.error(`Server is not running due to error: ${err} 🔴`)
  );

app.get("/", (req, res) => {
  res.send("welcome to my restaurant Api");
});
