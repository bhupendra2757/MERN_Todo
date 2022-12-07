import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import todoRoutes from "./routes/route.js"

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.get ("/", (req, res)=>{
    res.send("Hello world");
});

app.use("/api/todos", todoRoutes);

app.listen(5080, async () => {
    console.log("Server has started on port 8080");
    try {
     await mongoose.connect(process.env.CONN);
      console.log("Successfully Connected to DB");
    } catch (err) {
      console.log("Error during connection to database", err);
    }
  });