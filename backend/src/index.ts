import express, {Request, Response} from 'express';
import cors from "cors";
import "dotenv/config";
import mongoose from 'mongoose';
import myUserRoute from "./routes/myUserRoutes";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => 
    console.log("connected to a database"));

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/my/user", myUserRoute)

app.listen(4000, () => {
    console.log(`Sever started on localhost 4000`)
});