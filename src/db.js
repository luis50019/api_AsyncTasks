//this document use mongoose for can connect the data base of mongoDB Atlas
import mongoose from "mongoose";
import { URL_DATA_BASE } from "./config.js";

export const connectDB = async()=>{
    try {
        await mongoose.connect(URL_DATA_BASE);
        console.log('>>> DB is connect');

    } catch (error) {
        console.log(Error);
    }
}