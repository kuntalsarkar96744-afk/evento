require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./connection/connectdb');

const PORT = process.env.PORT || 3001;
const routes = require('./routes/route');

app.get('/', async(req, res)=>{
    res.status(200).json("This server is working please proceed");
})
app.use('/', routes);


const start = async()=>{
  try {
     await connectDB(process.env.MONGODB_URL);
      app.listen(PORT, ()=>{
        console.log(`http://localhost:${PORT}`);
    })
  } catch (error) {
    console.log(error);
  }
}
start();
