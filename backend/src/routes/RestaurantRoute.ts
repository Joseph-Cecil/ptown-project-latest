import express from "express";
import { param } from "express-validator";
import RestaurantController from "../controllers/RestaurantController";

const router = express.Router();

router.get(
    "/search/:areaName",
    param("areaName")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("AreaName parameter must be a valid string"),
    RestaurantController.searchRestaurants
);

export default router