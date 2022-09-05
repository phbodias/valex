import { Router } from "express";
import * as controller from "../controllers/cardsController";

const cardsRoute = Router();

cardsRoute.get("/cards/:id", controller.showCard);

export default cardsRoute;
