import express, {Request, Response} from 'express';
import cors from "cors";
import "dotenv/config";
import mongoose from 'mongoose';
import {v2 as cloudinary} from "cloudinary";
import myUserRoute from "./routes/myUserRoutes";
import myRestaurantRoute from "./routes/MyRestaurantRoute";
import restaurantRoute from './routes/RestaurantRoute';

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => 
    console.log("connected to a database"));

    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    })

const app = express();
app.use(express.json());
app.use(cors());

app.get("/health", async (req: Request, res: Response) => {
    res.send({message: "Health is OK"})
})

app.use("/api/my/user", myUserRoute);
app.use("/api/my/restaurant", myRestaurantRoute);
app.use("/api/restaurant", restaurantRoute);

app.listen(4000, () => {   
    console.log(`Sever started on localhost 4000`)
});