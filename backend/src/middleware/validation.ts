import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

const handleValidationErrors = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export const validateMyUserRequest = [
  body("name").isString().notEmpty().withMessage("Name must be a string"),
  body("phoneNumber")
    .isNumeric()
    .notEmpty()
    .withMessage("Phone Number must be a Number"),
  body("areaName").isString(),
  body("streetName").isString(),
  body("houseNumber").isString(),
  handleValidationErrors,
];

export const validateMyRestaurantRequest = [
  body("restaurantName").notEmpty().withMessage("Shop Name is required"),
  body("areaName").isString().notEmpty().withMessage("Area Name is Required"),
  body("location").isString().notEmpty().withMessage("Exact Location of your Shop is required"),
  body("estimateDeliveryTime"),
  body("cuisines").notEmpty().withMessage("Type of Items is required"),  
];
