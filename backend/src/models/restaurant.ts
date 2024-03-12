import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
    name: {type: String, required: false},
    price: {type: Number, required: false}
})

const restaurantSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    restaurantName: {type: String, required: true},
    areaName: {type: String, required: true},
    location: {type: String, required: true},
    estimateDeliveryTime: {type: Number, required: false},
    cuisines: [{type: String, required: true}],
    menuItems: [menuItemSchema],
    imageUrl: {type: String, required: true},
    lastUpdated: {type: Date, required: true}
})

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
export default Restaurant; 