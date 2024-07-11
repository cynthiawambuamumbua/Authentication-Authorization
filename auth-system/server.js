const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database'); 

require('dotenv').config();

const app = express();

// connectDB();

app.use(bodyParser.json());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/protected', require('./routes/protectedRoutes'));

const PORT = process.env.PORT || 5000;

const start = async () => {

  try{

      await connectDB(process.env.MONGO_URI)
      console.log("Database connected ")
      
      app.listen(PORT, () => {
        console.log(`server is running on port ${PORT} `)
      })

  }catch(error){

    console.log(error)

  }

}
start()