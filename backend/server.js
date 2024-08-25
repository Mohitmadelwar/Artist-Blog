require("dotenv").config();
const express= require('express')
const app = express();
const mongoose=require('mongoose')
const cors=require('cors')
const connectDb = require("./utils/db")
const cardRoutes = require('./Routes/cardRoutes');


app.use(cors());
app.use(express.json());

app.use('/api', cardRoutes);

const PORT= 5000
connectDb().then(() => { 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})