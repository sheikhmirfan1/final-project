import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose'


const PORT = process.env.PORT || 3000
const MONGO_URI = process.env.MONGO_URI

const app = express()


mongoose.connect(MONGO_URI)




app.get('/', (req, res) => {
  res.send('welcome to my restaurant Api')
})
const returnServer = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}🟢`);
})

    