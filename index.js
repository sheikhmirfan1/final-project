import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose'
import productRoute from './routes/productRoute.js'


const PORT = process.env.PORT || 3000
const MONGO_URI = process.env.MONGO_URI

const app = express()

app.use('/api', productRoute)

mongoose.connect(MONGO_URI)
  .then(() => app.listen(PORT, () =>  console.log (`Server is running on port ${PORT} 🟢` )))
  .catch((err) =>console.error(`Server is not running due to error: ${err} 🔴`))



app.get('/', (req, res) => {
  res.send('welcome to my restaurant Api')
})