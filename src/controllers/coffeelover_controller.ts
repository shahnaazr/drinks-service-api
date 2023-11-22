import { Request, Response } from "express";
import * as coffeeService from "../services/coffee_service";

export const getCoffeeLover = async (req: Request, res: Response) => {
  const coffeelover = coffeeService.getCoffeeLover();
  res.send(coffeelover).status(200);
};
