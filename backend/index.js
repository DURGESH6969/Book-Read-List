import dotenv from 'dotenv';
dotenv.config();
import{PORT,mongoDBURL} from './config.js'
import express, { response }  from "express";
import mongoose from "mongoose";
import {Book} from './models/bookModel.js'
import booksRoute from './routes/booksRoute.js'
const app = express();
import cors from 'cors';

// Middleware for parsing request a body
app.use(express.json());


//Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

app.get('/',(request,response)=>{
  console.log(request);
  return response.status(234).send(`Welcome to MERN stack project`)
})

app.use('/books',booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(()=>{
    console.log(`App connected to the database`);
    
  app.listen(PORT,()=>{
  console.log(`App is listening on port ${PORT}`);
  });
  }).catch((error)=>{
    console.log(error);
  });