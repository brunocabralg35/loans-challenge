import { NextFunction, Request, Response } from "express";

export const loanValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { age, cpf, name, income, location } = req.body;

  if (
    age === undefined &&
    cpf === undefined &&
    name === undefined &&
    income === undefined &&
    location === undefined
  ) {
    res.json({
      message: "Info missing",
    });
  } else {
    next();
  }
};
