// import mongoose from "mongoose";
// import dbSchema from './Schema/dbSchema'
import {dotenv} from "dotenv/config"

export default function DbConnection(){
    const SECRET_KEY = process.env.SECRET_KEY
    
    const connection_url = `mongodb+srv://akshith:${SECRET_KEY}@cluster0.arzrd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    console.log(connection_url)
    return 'db'
}

