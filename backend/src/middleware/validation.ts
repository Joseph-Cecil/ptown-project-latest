import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

const handleValidationErrors = async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    next();
}

export const validateMyUserRequest = [
  body("name").isString().notEmpty().withMessage("Name must be a string"),
  body("phoneNumber")
    .isNumeric()
    .notEmpty()
    .withMessage("Phone Number must be a Number"),
  body("areaName")
    .isString()
    .notEmpty()
    .withMessage("areaName must be a string"),
  body("streetName")
    .isString()
    .notEmpty()
    .withMessage("streetName must be a string"),
  body("houseNumber")
    .isString()
    .notEmpty()
    .withMessage("HouseNumber must be a string"),
    handleValidationErrors,
];
