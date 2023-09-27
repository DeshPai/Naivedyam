// import { sample_foods, sample_tags, sample_users } from "./data";
import dotenv from 'dotenv';
dotenv.config();

// import path from 'path';
import express from "express";
 import cors from "cors";
import foodRouter from './routers/food.router';
import userRouter from './routers/user.router';
import orderRouter from './routers/order.router';
import { dbConnect } from "./config/database.config";
dbConnect();

const app = express();
app.use(express.json());

app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

//about Api Food
app.use("/api/foods",foodRouter);

// about Api User
app.use("/api/users" , userRouter);

// about Api order
app.use("/api/orders" , orderRouter);

const port = 5000;
app.listen(port,()=>{
    console.log("Website Served on http://localhost:"+port);
})