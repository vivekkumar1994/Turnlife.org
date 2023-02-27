import express from "express";
import cors from "cors"
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config()
const app = express();
const port = process.env.POrt || 3008
app.use(cors());
app.use(bodyParser.json());

app.get("/",(req,res) => {
    console.log("working");
})

app.listen(port,(req,res)=> {
    console.log(`server is running on ${port}`);
})
