import { Router } from "express";

import { imagesController } from "../controllers/images.controller.js";

import uploadMiddleware from "../middlewares/uploadMiddleware.js";

const imagesRouter = Router();

imagesRouter.post("/", uploadMiddleware, imagesController);


export default imagesRouter;