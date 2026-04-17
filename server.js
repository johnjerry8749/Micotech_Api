import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import router from './routes/routes.js';
import pool from "./config/db.js"; 
import errorMilddleware from "./middleware/error.middleware.js";

//load environment variables from .env file
dotenv.config();

const app = express();

//set the port to the value of the PORT environment variable or default to 5000
const PORT = process.env.PORT || 5000;


// app.use(cors({ origin: process.env.FRONTEND_URL, 
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     Credentials: true
// }));

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));


//route for the root path
app.use('/api', router);

//for error handling middleware
app.use(errorMilddleware);


app.get("/", (req, res) => {
  res.json({ message: "Backend working!" });
});


//start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});